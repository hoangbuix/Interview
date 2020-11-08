import { Controller, Post, Get, Body, Request, Response, UsePipes, UseGuards, Put, ForbiddenException, HttpStatus, NotFoundException, UseInterceptors } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { BadRequestException } from 'src/exceptions/bad-request.exception';
import { responseUser } from 'src/response-data/user.response';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserRole } from 'src/models/user-role.enum';
import { UpdateRoleDto } from 'src/dto/update-dto/update-role';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken'
import { LoginDto } from 'src/dto/req/login.dto';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { CreateUserDto } from 'src/dto/create-dto/create-user.dto';


@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('get-all')
  // @Roles()
  // @UseGuards(JwtAuthGuard, RolesGuard)
  async getAll() {
    return await this.userService.getAllUser();
  }

  @Post('create-user')
  async create(@Request() req, @Response() res, @Body() createUserDto: CreateUserDto) {
    const userExit = await this.userService.getUserByUserName(createUserDto.username);
    if (userExit) throw new BadRequestException('Tên người dùng đã tồn tại!');
    const users = await this.userService.createUser(
      createUserDto
    );
    res.status(200).json(responseUser(users));
  }

  @UsePipes(new ValidationPipe())
  @Post('login')
  async signIn(@Request() req, @Response() res, @Body() loginDto: LoginDto) {
    const userExist = await this.userService.getUserByUserName(loginDto.username);
    if (!userExist) throw new BadRequestException('Tên người dùng  không tồn tại!!');
    if (!userExist.active) {
      throw new BadRequestException('Người dùng đã bị khóa!')
    }
    const token = await this.userService.signIn(loginDto);
    res.status(200).json(token);
  }

  @Roles(UserRole.admin, UserRole.teacher, UserRole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('update-role')
  async updatePermission(@Request() req, @Response() res, @Body() updateRoleDto: UpdateRoleDto) {
    const token = req.headers.authorization.slice(7);
    const payload: any = jwt.decode(token);
    const ID = Object(payload)

    const permissions: Array<string> = updateRoleDto.roles;
    // if (typeof(permissions) !== "string" || typeof(permissions) !== "object" ){throw new}
    if (permissions.length === 0 && (typeof(permissions) !== "string" || typeof(permissions) !== "object")) throw new BadRequestException('Quyền không hợp lệ!--');
    const role = await this.userService.getPermission(updateRoleDto.roles);
    if (!(role.isManager || role.isAdmin || role.isTeacher)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
    if (role.isManager) {
      if (permissions.length !== 1) throw new BadRequestException('Quyền không hợp lệ!---');
      if (permissions[0] !== 'student') throw new BadRequestException('Quyền không hợp lệ!----');
    }
    const result = await this.userService.updatePermission(permissions, ID._id);
    res.status(HttpStatus.OK).json({ message: 'Cập nhật quyền thành công!', data: result });
  }
}
