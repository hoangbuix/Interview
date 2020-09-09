import { Controller, Post, Get, Body, Request, Response } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { BadRequestException } from 'src/exceptions/badrequest.exception';
import { responseUser } from 'src/adapters/user.adapter';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/get-all')
  async getAll() {
    return await this.userService.getAllUser();
  }

  @Post()
  async create(
    @Request() req,
    @Response() res,
    @Body() createUserDto: CreateUserDto
  ) {
    const userExit = await this.userService.getUserByUserName(createUserDto.username);
    if (userExit) throw new BadRequestException('Tên người dùng đã tồn tại!');
    const users = await this.userService.createUser(
      createUserDto
    );
    res.status(200).json(responseUser(users));
  }
}
