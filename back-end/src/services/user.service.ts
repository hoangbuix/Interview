import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'
import { UserModel } from 'src/models/user.model';
import { responseUser } from 'src/adapters/user.adapter';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { MajorService } from './major.service';
import { TeacherService } from './teacher.service';
import { CompanyService } from './company.service';
import { TopicService } from './topic.service';
import { NotAcceptableException } from 'src/exceptions/not-acceptable.exception';
import { UnAuthorizedException } from 'src/exceptions/un-authorized.exception';
import { JwtPayload } from 'src/models/jwtPayload.model';
import { jwtConstants } from 'src/exceptions/constants';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserModel>,
    private readonly majorService: MajorService,
    private readonly teacherService: TeacherService,
    private readonly companyService: CompanyService,
    private readonly topicService: TopicService
  ) { }

  protected generatorToken = (payload) => {
    return jwt.sign(payload, jwtConstants.secret);
  }

  // public generatorToken(user) {
  //   let today = new Date();
  //   let exp = new Date(today);
  //   exp.setDate(today.getDate() + 60);

  //   return jwt.sign({
  //     id: user._id,
  //     username: user.username,
  //     email: user.email,
  //     exp: exp.getTime() / 1000,
  //   }, jwtConstants.secret);
  // };


  public getPermission = (permissions: any) => {
    const isAdmin = permissions.includes('admin');
    const isTeacher = permissions.includes('teacher');
    const isStudent = permissions.includes('student');
    return { isAdmin, isTeacher, isStudent };
  }


  async signIn(createUserDto: CreateUserDto):  Promise<{ accessToken: string }> {
    const { username, password } = createUserDto;
    const user: any = await this.getUserByUserName(username);
    if (!user) throw new NotFoundException('Tên người dùng không hợp lệ');
    if (!user.active) throw new NotAcceptableException('Tài khoản đã bị khóa hoặc không hoạt động!');
    const correctPassword: boolean = await bcrypt.compareSync(password, user.password);
    if (!correctPassword) throw new UnAuthorizedException('Mật khẩu không chính xác');
    const payload: JwtPayload = { _id: user._id, username: user.username, changePasswordAt: user.changePasswordAt };
    const accessToken = await this.generatorToken(payload);
    await user.save();
    return { accessToken };
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
    const user = await this.userModel.find().exec().catch(err => {
      throw new NotFoundException('Không tìm thấy user' + err.message);
    });
    const users = user.map(u => {
      return responseUser(u);
    });
    return Promise.resolve(users);
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserModel> {
    const salt = await bcrypt.genSaltSync(12);
    const username = createUserDto.username;
    let password = createUserDto.password;
    const major = await this.majorService.getMajorById(createUserDto.majorId);
    console.log(major);

    const teachers = await this.teacherService.getTeacherId(createUserDto.teacherId);
    console.log(teachers);

    const company = await this.companyService.getCompanyById(createUserDto.companyId)
    console.log(company);

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
  }

  async findOne(username: string): Promise<UserModel | undefined> {
    return await this.userModel.findOne(user => user.username === username);
  }


  async getUserByUserName(username: string) {
    const user = await this.userModel.findOne({ "username": username }).exec();
    if (!user) throw new NotFoundException('Người dùng không tồn tại');
    return user;
  }

  async getUserById(userId: string) {
    const user = await this.userModel.findById({_id: userId}).exec();
    if (!user) throw new NotFoundException('Không tìm thấy id của người dùng');

    return user;
  }

  // async updatePassword(req) {
  //   const currentUser: any = await this.getUserByUserName(req.payload.username);

  // }
}
