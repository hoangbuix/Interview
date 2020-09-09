import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportModel } from 'src/models/report.model';
import { CreateReportDto } from 'src/dto/create-report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel('report') private readonly reportModel: Model<ReportModel>,
  ) { }

  async getAllReport() {
    const topic = await this.reportModel.find().exec();
    return topic;
  }

  async createReport(createReportDto: CreateReportDto): Promise<ReportModel> {
    const topic = new this.reportModel(createReportDto);
    return await topic.save();
  }
}
