import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserModel } from 'src/models/user.model';
import { responseUser } from 'src/adapters/user.adapter';
import { CreateUserDto } from 'src/dto/create-user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserModel>,
  ) {}

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
    password = await bcrypt.hashSync(password, salt);
    const newUser: UserModel = new this.userModel({
      ...createUserDto,
      password: password,
      username: username,
      changePasswordAt: new Date(),
    });
  
    const createUser = new this.userModel(newUser)
    return await createUser.save();
  }

  getUserByUserName(username: string) {
    const user = this.userModel
      .findOne({ username })
      .exec()
      .catch(err => {
        throw new NotFoundException(err);
      });
    if (!user) throw new NotFoundException('Tên người đùng đã tồn tại');
    return user;
  }

  getUserById(userId: string) {
    const user = this.userModel.findById(userId).exec().catch(err =>{
      throw new NotFoundException(err);
    })
    if(!user) throw new NotFoundException("Không tìm thấy id của người dùng")

    return user;
  }
}
