import {
  Controller,
  Get,
  Body,
  Post,
  NotFoundException,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { RoleService } from 'src/services/role.service';
import { RoleModel } from 'src/models/role.model';
import { RoleDto } from 'src/dto/role.dto';
// import { UserModel } from 'src/models/user.model';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('/get-all')
  async getAll(): Promise<RoleModel[]> {
    const user = await this.roleService.getAll();
    console.log(user);
    if (user == null) throw new NotFoundException('Không tìm thấy role nào!');
    return user;
  }

  @Post()
  async createRole(@Res() res, @Body() createRoleDto: RoleDto) {
    const role = await this.roleService.addRole(createRoleDto);
    return res.status(HttpStatus.OK).json({
      message: 'Role has been created successfully',
      role,
    });
  }
}
