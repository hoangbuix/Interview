import { Controller, Get, Body, Response, Request, Post, Put, UseGuards, Req, Res, Param, Delete } from "@nestjs/common";
import { TeacherService } from "src/services/teacher.service";
import { TeacherModel } from "src/models/teacher.model";
import { BadRequestException } from "src/exceptions/bad-request.exception";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Roles } from "src/auth/decorators/roles.decorator";
import { CreateTeacherDto } from "src/dto/create-dto/create-teacher.dto";
import { UserRole } from "src/models/user-role.enum";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { RolesGuard } from "src/auth/guards/role.guard";
import { UpdateTeacherDto } from "src/dto/update-dto/update-teacher.dto";
import { ForbiddenException } from "src/exceptions/forbidden.exception";


@ApiBearerAuth()
@ApiTags('teacher')
@Controller('teacher')
export class TeacherController {
    constructor( private readonly teacherService: TeacherService){}

    @Post('/create-teacher')
    async createTeacher(@Request() req, @Response() res, @Body() createTeacherDto: CreateTeacherDto) {
        const teacherExist = await this.teacherService.getTeacherId(createTeacherDto.teacherId);
        if (teacherExist) throw new BadRequestException('Giáo viên đã tồn tại');
        const teacher = await this.teacherService.addTeacher(createTeacherDto);
        res.status(200).json(teacher);
    }

    @Put('update-teacher/:id')
    @Roles(UserRole.admin,  UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async updateTeacher(@Req() req, @Res() res, @Param('id') id: string, @Body() update: UpdateTeacherDto ){
        // console.log(req.user)
        const role = this.teacherService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.teacherService.updateTeacher( id, update);
        res.json({message: 'Cập nhật thành công!'});
    }


    @Delete("delete-teacher/:id")
    @Roles(UserRole.admin,  UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async deleteTeacher(@Req() req, @Res() res, @Param('id') id: string) {
        const role = this.teacherService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.teacherService.deleteTeacher(id);
        res.json({message: 'Xóa giáo viên thành công!'});
    }

    @Get('/get-all')
    // @Roles('admin')
    async getAll(): Promise<TeacherModel[]> {
        return await this.teacherService.getAll();
    }

    @Get('/get-teacher/:id')
    async getTeacherById(@Param('id') id: string): Promise<TeacherModel>{
        return await this.teacherService.getTeacherId(id);
    }

}