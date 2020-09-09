import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserModel } from 'src/models/user.model';
import { responseUser } from 'src/adapters/user.adapter';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { MajorService } from './major.service';
import { TeacherService } from './teacher.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserModel>,
    private readonly majorService: MajorService,
    private readonly teacherService: TeacherService,
  ) { }

  async getAllUser() {
    const user = await this.userModel
      .find()
      .exec()
      .catch(err => {
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
    const a = await this.majorService.getMajorName(createUserDto.major);
    console.log(a);

    const teachers = await this.teacherService.getTeacherName(createUserDto.teacher);
    console.log(teachers);

    password = await bcrypt.hashSync(password, salt);
    const newUser: UserModel = new this.userModel({
      ...createUserDto,
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
    const user = await this.userModel
      .findOne({ "username": username })
      .exec()
      .catch(err => {
        throw new NotFoundException(err);
      });
    if (user) throw new NotFoundException('Người dùng đã tồn tại');
    return user;
  }

  async getUserById(userId: string) {
    const user = await this.userModel
      .findById(userId)
      .exec();
    if (!user) throw new NotFoundException('Không tìm thấy id của người dùng');

    return user;
  }
}
