import { Controller, Post, Get } from '@nestjs/common';

import { UserService } from '../services/user.service';
import { UserModel } from 'src/models/user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Get('/get-all')
  async get(): Promise<UserModel[]> {
      return await this.userService.get();
  }
}
