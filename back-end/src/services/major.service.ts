import { Injectable } from '@nestjs/common';
import { MajorModel } from 'src/models/major.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundException } from 'src/exceptions/not-found.exception';
import { CreateMajorDto } from 'src/dto/create-dto/create-major.dto';
import { UpdateMajorDto } from 'src/dto/update-dto/update-major.dto';
import { UserRole } from 'src/utils/user-role.enum';

@Injectable()
export class MajorService {
  constructor(
    @InjectModel('major') private readonly majorModel: Model<MajorModel>,
  ) { }

  async getAllMajor() {
    return await this.majorModel.find().exec();
  }

  async createMajor(createMajorDto: CreateMajorDto): Promise<MajorModel> {
    const exitsMajor = await this.majorModel.findOne({
      majorId: createMajorDto.majorId,
    }).exec();
    if (exitsMajor) throw new NotFoundException();
    const major: MajorModel = new this.majorModel(createMajorDto);
    return await major.save();
  }

  async updateMajor(id: string, update: UpdateMajorDto): Promise<MajorModel> {
    const major = await this.majorModel.findByIdAndUpdate({ _id: id, active: true }, { majorId: update.majorId, majorName: update.majorName, majorDescription: update.majorDescription, updatedAt: new Date() }).exec().catch(err => {
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
