import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/get-all')
  async get(): Promise<User[]> {
    return await this.userService.get();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.add(createUserDto);
  }
}
