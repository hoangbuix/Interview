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
    const results = await this.reportModel.findOneAndUpdate({'userId': createReportDto.userId}, {
      $push: {
        'info': {
          'reportName': createReportDto.reportName,
          'content': {
            'file': createReportDto.file,
            'image': createReportDto.image,
          },
          'teacherId': createReportDto.teacherId,
          'reportDate': new Date(),
        }
      }
    }, { new: true, upsert: false }).exec();

    return results;
  }

  async getReportName(reportName: string) {
    const report = await this.reportModel.findOne({ 'info.reportName': reportName }).exec().catch((err) =>
      console.log("err" + err)
    )
    console.log(report + "------------------------------" + 'report')
    return report;
  }
}
