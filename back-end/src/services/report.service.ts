import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportModel } from 'src/models/report.model';
import { CreateReportDto } from 'src/dto/create-report.dto';
import { TopicService } from './topic.service';
import { BadRequestException } from 'src/exceptions/bad-request.exception';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel('report') private readonly reportModel: Model<ReportModel>,
    private readonly topicService: TopicService
  ) { }

  async getAllReport() {
    const topic = await this.reportModel.find().exec();
    return topic;
  }


  async createReport(createReportDto: CreateReportDto) {

    const topic = await this.topicService.getTopicId(createReportDto.topicId);
    const checkExits: ReportModel = new this.reportModel({
      userId: createReportDto.userId,
      topicId: topic._id,
      teacherId: createReportDto.teacherId
    });

    const checkUser = await this.reportModel.findOne({ userId: createReportDto.userId }).exec();
    const checkTopic = await this.reportModel.findOne({ topicId: createReportDto.topicId }).exec();
    if (checkUser == null && checkTopic == null) {
      await checkExits.save();
    }

    const results = await this.reportModel.findOneAndUpdate({}, {
      $push: {
        'info': {
          'reportName': createReportDto.reportName,
          'companyId': createReportDto.companyId,
          'meetId': createReportDto.meetId,
          'content': {
            'contentReport': createReportDto.contentReport,
            'teacherRequest': createReportDto.teacherRequest,
            'expectedContent': createReportDto.expectedContent,
            'image': createReportDto.image,
          },
          'reportDate': new Date(),
        }
      }
    }, { new: true, upsert: false }).exec();

    const dataResult = results

    return dataResult;
  }

  async getReportName(reportName: string) {
    const report = await this.reportModel.findOne({ 'info.reportName': reportName }).exec();
    if (report) throw new BadRequestException();
    return report;
  }
}
