import { Controller, Get, Body, Response, Request, Post } from "@nestjs/common";
import { TeacherService } from "src/services/teacher.service";
import { TeacherModel } from "src/models/teacher.model";
import { CreateTeacherDto } from "src/dto/create-teacher.dto";
import { BadRequestException } from "src/exceptions/bad-request.exception";


@Controller('teacher')
export class TeacherController {
    constructor( private readonly teacherService: TeacherService){}

    @Get('/get-all')
    async getAll(): Promise<TeacherModel[]> {
        return await this.teacherService.getAll();
    }

    @Post()
    async createTeacher(@Request() req, @Response() res, @Body() createTeacherDto: CreateTeacherDto) {
        const teacherExist = await this.teacherService.getTeacherId(createTeacherDto.teacherId);
        if (teacherExist) throw new BadRequestException('Giáo viên đã tồn tại');
        const teacher = await this.teacherService.addTeacher(createTeacherDto);
        res.status(200).json(teacher);
    }
}