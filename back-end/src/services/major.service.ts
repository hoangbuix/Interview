import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundException } from 'src/exceptions/not-found.exception';
import { UserRole } from 'src/utils/user-role.enum';
import { BadRequestException } from 'src/exceptions/bad-request.exception';
import { MajorModel } from 'src/models/major.model';
import { CreateMajorDto } from 'src/dto/create-dto/create-major.dto';
import { UpdateMajorDto } from 'src/dto/update-dto/update-major.dto';
import { TeacherService } from './teacher.service';
import { UserService } from './user.service';
import { ClassService } from './class.service';



@Injectable()
export class MajorService {
  constructor(
    @InjectModel('major') private readonly majorModel: Model<MajorModel>,
    private readonly teacherService: TeacherService,
    private readonly userService: UserService,
    private readonly classService: ClassService
  ) { }

  async getAllMajor() {
    return await this.majorModel.find().exec();
  }

  async createMajor(createMajorDto: CreateMajorDto): Promise<MajorModel> {
    const query = [
      {
        path: 'classId',
        select: 'className'
      },
      {
        path: 'userId',
        select: 'fullName'
      },
      {
        path: 'teacherId',
        select: 'teacherName'
      }, //populate nested array
    ];

    const exist = await this.majorModel.find().populate(query).lean().exec().catch(err => {
      throw new NotFoundException('Không tìm thấy' + err.message);
    });

    const exitsMajor = await this.majorModel.findOne({
      majorName: createMajorDto.majorName,
    }).exec().catch(err => { throw new NotFoundException('Not found' + err.message) });
    const major: MajorModel = new this.majorModel({
      ...createMajorDto
    });
    if (exitsMajor === null) {
      await major.save();
    }
    const _teacherId = (await this.teacherService.getAll()).forEach(v => v?._id);
    const _userId = (await this.userService.getAllUser()).forEach(v => v?._id);
    const _classId = (await this.classService.getAll()).forEach(v => v?._id);
    const results = await this.majorModel.findOneAndUpdate({ major }, {
      $push: {
        'manager': {
          'teacher': { 'teacherId': _teacherId },
          'user': { 'userId': _userId },
          'class': { 'classId': _classId }
        }
      }
    }, { new: true, upsert: true }).exec().catch((err) => {
      throw new BadRequestException("Khoa đã tồn tại ")
    });
    return results;

  }

  async updateMajor(id: string, update: UpdateMajorDto): Promise<MajorModel> {
    const major = await this.majorModel.findByIdAndUpdate({ _id: id, active: true },
      { majorName: update.majorName, majorDescription: update.majorDescription, updatedAt: new Date() }).exec().catch(err => {
        throw new NotFoundException('Không tìm thấy ngành này của bạn yêu cầu!');
      });
    return major;
  }

  async deleteMajor(id: string) {
    const major = await this.majorModel.findByIdAndUpdate({ "_id": id }, { active: false }, { new: true }).exec().catch((err) => {
      throw new NotFoundException("Không tìm thấy ngành học để xóa!");
    });
    return major;
  }

  async getMajorName(majorName: string) {
    const major = await this.majorModel.findOne({ majorName: majorName }).exec();
    if (!major) throw new NotFoundException("Không tìm thấy ngành học của bạn!");
    return major
  }

  async getMajorById(id: string) {
    const major = await this.majorModel.findById({ _id: id }).exec();
    if (!major) throw new NotFoundException("Không tìm thấy id ngành học của bạn");
    return major;
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
