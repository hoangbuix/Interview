import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeacherModel } from 'src/models/teacher.model';
import { NotFoundException } from 'src/exceptions/not-found.exception';
import { CreateTeacherDto } from 'src/dto/create-dto/create-teacher.dto';
import { UpdateTeacherDto } from 'src/dto/update-dto/update-teacher.dto';
import { UserRole } from 'src/utils/user-role.enum';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel('teacher') private readonly teacherModel: Model<TeacherModel>,
  ) { }

  async getAll(): Promise<TeacherModel[]> {
    return await this.teacherModel.find().exec();
  }

  async addTeacher(createdTeacherDto: CreateTeacherDto): Promise<TeacherModel> {
    const exitTeacher = await this.teacherModel.findOne({ teacherName: createdTeacherDto.teacherName });

    if (!exitTeacher) {
      throw new NotFoundException("Không tồn tại")
    } else {
      const createTeacher = new this.teacherModel(createdTeacherDto);
      return await createTeacher.save();
    }
  }

  async updateTeacher(id: string, update: UpdateTeacherDto): Promise<TeacherModel> {
    const teacher = await this.teacherModel.findByIdAndUpdate({ "_id": id, active: true }, { teacherName: update.teacherName, active: update.active, updatedAt: new Date() }, { new: true }).exec().catch((err) => {
      throw new NotFoundException('Không tìm thấy giáo viên này của bạn yêu cầu!');
    });
    return teacher;
  }

  async deleteTeacher(id: string) {
    const teacher = await this.teacherModel.findByIdAndUpdate({ "_id": id }, { active: false }, { new: true }).exec().catch((err) => {
      throw new NotFoundException("Không tìm thấy giáo viên để xóa!");
    });
    return teacher;
  }

  async getTeacherId(id: string) {
    const teacher = await this.teacherModel.findById({ _id: id }).exec();
    if (!teacher) throw new NotFoundException(`Không tìm thấy giáo viên có id : ${id}`);
    return teacher;
  }

  async getTeacherName(teacherName: string) {
    const teacher = await this.teacherModel.findOne({ 'teacherName': teacherName }).exec();
    if (!teacher) throw new NotFoundException(`Không tìm thấy giáo viên với tên ${teacherName}`);
    return teacher;
  }

  public getPermission = (permissions: any) => {
    const role = UserRole
    const isAdmin = permissions.includes(role.admin);
    const isUser = permissions.includes(role.user);
    const isTeacher = permissions.includes(role.teacher);
    const isStudent = permissions.includes(role.student);
    const isManager = permissions.includes(role.manager);
    return { isAdmin, isManager, isTeacher, isStudent, isUser }
  }

}
