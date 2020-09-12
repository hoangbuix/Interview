import { Injectable } from '@nestjs/common';
import { MajorModel } from 'src/models/major.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMajorDto } from 'src/dto/create-major.dto';
import { NotFoundException } from 'src/exceptions/not-found.exception';

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

  async getMajorName(majorName: string) {
    const major = await this.majorModel.findOne({ 'majorName': majorName }).exec();
    if (!major) throw new NotFoundException("Không tìm thấy ngành học của bạn!");
    return major
  }
}
