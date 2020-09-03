import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeacherModel } from 'src/models/teacher.model';
import { CreateTeacherDto } from 'src/dto/create-teacher.dto';
import { NotFoundException } from 'src/exceptions/notfound.exception';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel('teacher') private readonly teacherModel: Model<TeacherModel>,
  ) {}

  async getAll(): Promise<TeacherModel[]> {
    return await this.teacherModel.find().exec();
  }

  async addTeacher(createdTeacherDto: CreateTeacherDto): Promise<TeacherModel> {
    const exitTeacher = await this.teacherModel.findOne({
      teacherId: createdTeacherDto.teacherId,
    });
    if (exitTeacher) {
      throw new NotFoundException('Giáo viên này đã tồn tại!');
    }
    const createTeacher = new this.teacherModel(createdTeacherDto);
    return await createTeacher.save();
  }

  async getTeacherId(id: string) {
    const teacher = this.teacherModel.findOne({id}).exec();
    if (!teacher) throw new NotFoundException(`Không tìm thấy giáo viên có id : ${id}`);
    return teacher;
  }
}
