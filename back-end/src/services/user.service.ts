import { ForbiddenException, HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'
import { UserModel } from 'src/models/user.model';
import { responseUser } from 'src/response-data/user.response';
import { MajorService } from './major.service';
import { TeacherService } from './teacher.service';
import { CompanyService } from './company.service';
import { TopicService } from './topic.service';
import { NotAcceptableException } from 'src/exceptions/not-acceptable.exception';
import { UnAuthorizedException } from 'src/exceptions/un-authorized.exception';
import { JwtPayload } from 'src/models/jwtPayload.model';
import { jwtConstants } from 'src/exceptions/constants';
import { AuthService } from './auth.service';
import { UserRole } from 'src/models/user-role.enum';
import { BadRequestException } from 'src/exceptions/bad-request.exception';
import { LoginDto } from 'src/dto/req/login.dto';
import { CreateUserDto } from 'src/dto/create-dto/create-user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserModel>,
    private readonly majorService: MajorService,
    private readonly teacherService: TeacherService,
    private readonly companyService: CompanyService,
    private readonly topicService: TopicService,
  ) { }

  protected generatorToken = (payload) => {
    return jwt.sign(payload, jwtConstants.secret);
  }



  public getPermission = (permissions: any) => {
    const role = UserRole
    const isAdmin = permissions.includes(role.admin);
    const isUser = permissions.includes(role.user);
    const isTeacher = permissions.includes(role.teacher);
    const isStudent = permissions.includes(role.student);
    const isManager = permissions.includes(role.manager);
    return { isAdmin, isManager, isTeacher, isStudent, isUser }
  }


  async signIn(loginDto: LoginDto): Promise<{ token: string }> {
    const { username, password } = loginDto;
    const user: any = await this.getUserByUserName(username);
    if (!user) throw new NotFoundException('Tên người dùng  không hợp lệ!');
    if (!user.active) throw new NotAcceptableException('Tài khoản đã bị khóa hoặc không hoạt động!');
    const correctPassword: boolean = await bcrypt.compareSync(password, user.password);
    if (!correctPassword) throw new UnAuthorizedException('Mật khẩu không chính xác');
    const payload: JwtPayload = { _id: user._id, username: user.username, changePasswordAt: user.changePasswordAt };
    const token = await this.generatorToken(payload);
    await user.save();
    return { token };
  }

  async verify(req: any) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, jwtConstants.secret, (err, payload) => {
        if (!err) {
          req.payload = payload;
        } else {
          throw new UnauthorizedException('Token không hợp lệ hoặc đã hết hạn');
        }
      });
    } else {
      throw new UnauthorizedException('Token không hợp lệ');
    }
    return req;
  }


  async getAllUser() {
    const query = [
      {
        path: 'majorId',
        select: 'majorName'
      },
      {
        path: 'companyId',
        select: 'companyName'
      },
      {
        path: 'teacherId',
        select: 'teacherName'
      }, {
        path: 'topicId',
        select: 'topicName'
      }//populate nested array
    ];
    const user = await this.userModel.find().populate(query).lean().exec().catch(err => {
      throw new NotFoundException('Không tìm thấy user' + err.message);
    });
    const users = user.map(u => {
      return responseUser(u);
    });
    return Promise.resolve(users);
  }

  async findByEmail(email: string) {
    await this.userModel.findOne({ email: email }).exec(err => { throw new NotFoundException('Không tìm thấy user' + err.message) });
  }

  async findOne(username: string): Promise<UserModel | undefined> {
    return await this.userModel.findOne(user => user.username === username);
  }

  escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  }

  async getUserByName(fullName: string) {
    const user = await this.userModel.find({
      "fullName": { $regex: fullName, $options: 'i' }
    }).exec()
      .catch(err => {
        throw new NotFoundException('Người dùng không tồn tại');
      });
    return user;
  }

  async getUserByUserName(username: string) {
    const user = await this.userModel.findOne({ "username": username }).exec().catch(err => {
      throw new NotFoundException('Người dùng không tồn tại');
    });
    return user;
  }



  async getUserById(userId: string) {
    const user = await this.userModel.findById({ "_id": userId }).exec();
    if (!user) throw new NotFoundException('Không tìm thấy id của người dùng');
    return user;
  }

  async getRoleName(role: any) {
    const result = await this.userModel.findOne({ "roles": role }).exec();
    if (!result) throw new NotFoundException();
    return result.roles;
  }



  async createUser(createUserDto: CreateUserDto): Promise<UserModel> {
    if (this.isValidEmail(createUserDto.email) && createUserDto.password) {
      const userRegistered = await this.findByEmail(createUserDto.email);
      if (userRegistered === null) {
        const salt = await bcrypt.genSaltSync(12);
        const username = createUserDto.username;
        let password = createUserDto.password;
        password = await bcrypt.hashSync(password, salt);
        const newUser: UserModel = new this.userModel({
          fullName: createUserDto.fullName,
          gender: createUserDto.gender,
          birthDay: createUserDto.birthday,
          address: createUserDto.address,
          phone: createUserDto.phone,
          email: createUserDto.email,
          avatar: createUserDto.avatar,
          password: password,
          username: username,
          changePasswordAt: new Date(),
          updateAt: new Date()
        });
        const createUser = new this.userModel(newUser);
        return await createUser.updateOne();
      } else {
        throw new HttpException('REGISTRATION.USER_ALREADY_REGISTERED', HttpStatus.FORBIDDEN);
      }
    }
  }

  async updateUser(createUserDto: CreateUserDto): Promise<UserModel> {
    if (this.isValidEmail(createUserDto.email) && createUserDto.password) {
      const userRegistered = await this.findByEmail(createUserDto.email);
      if (userRegistered === null) {
        const salt = await bcrypt.genSaltSync(12);
        const username = createUserDto.username;
        let password = createUserDto.password;
        const major = await this.majorService.getMajorById(createUserDto.majorId);
        const teachers = await this.teacherService.getTeacherId(createUserDto.teacherId);
        const company = await this.companyService.getCompanyById(createUserDto.companyId)
        const topic = await this.topicService.getTopicId(createUserDto.topicId);
        password = await bcrypt.hashSync(password, salt);
        const newUser: UserModel = new this.userModel({
          ...createUserDto,
          majorId: major._id,
          teacherId: teachers._id,
          companyId: company._id,
          topicId: topic._id,
          password: password,
          username: username,
          changePasswordAt: new Date(),
        });
        const createUser = new this.userModel(newUser);
        return await createUser.save();
      } else {
        throw new HttpException('REGISTRATION.USER_ALREADY_REGISTERED', HttpStatus.FORBIDDEN);
      }
    }
  }

  isValidEmail(email: string) {
    if (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    } else return false
  }

  // async updateUser(update: UpdateRoleDto) {

  //   await this.userModel.findOneAndUpdate({fullName: update});
  // }


  async updatePermission(role: any, id: string) {
    const getUser = await this.userModel.findOne({ "_id": id, "roles": role }).exec();
    if (getUser) {
      throw new BadRequestException("Role đã tồn tại!");
    } else {
      await this.userModel.updateOne({ "_id": id }, { $push: { roles: role } }, { new: true }).exec();
    }
  }
}
