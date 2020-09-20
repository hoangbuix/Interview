import { Controller, Post, Get, Body, Request, Response, UsePipes, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { BadRequestException } from 'src/exceptions/bad-request.exception';
import { responseUser } from 'src/adapters/user.adapter';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { ValidationPipe } from 'src/shared/pipe/validation.pipe';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/shared/decorators/roles.decorator';


@ApiBearerAuth()
@ApiTags('user')
// @UseGuards()
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  // @Roles('admin')
  @Get('user/get-all')
  async getAll() {
    return await this.userService.getAllUser();
  }

  @Post('user/create-user')
  async create(@Request() req, @Response() res, @Body() createUserDto: CreateUserDto) {
    const userExit = await this.userService.getUserByUserName(createUserDto.username);
    if (userExit) throw new BadRequestException('Tên người dùng đã tồn tại!');
    const users = await this.userService.createUser(
      createUserDto
    );
    res.status(200).json(responseUser(users));
  }

  @UsePipes(new ValidationPipe())
  @Post('user/login')
  async signIn(@Request() req, @Response() res, @Body() createUserDto: CreateUserDto) {
    const userExist = await this.userService.getUserByUserName(createUserDto.username);
    if (!userExist) throw new BadRequestException('Tên người không tồn tại!');
    const token = await this.userService.signIn(createUserDto);
    res.status(200).json(token);
  }
}
