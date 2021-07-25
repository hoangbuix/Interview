import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportModel } from 'src/models/report.model';
import { BadRequestException } from 'src/exceptions/bad-request.exception';
import { CreateReportDto } from 'src/dto/create-dto/create-report.dto';
import { NotFoundException } from 'src/exceptions/not-found.exception';
import { UserRole } from 'src/utils/user-role.enum';
import { UpdateRoleDto } from 'src/dto/update-dto/update-role';
import { UpdateReportDto } from 'src/dto/update-dto/update-report.dto';
import { MeetService } from './meet.service';
import { TopicService } from './topic.service';
import { TeacherService } from './teacher.service';
import { UserService } from './user.service';
import { CompanyService } from './company.service';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel('report') private readonly reportModel: Model<ReportModel>,
    private readonly meetService: MeetService,
    private readonly topicService: TopicService,
    private readonly teacherService: TeacherService,
    private readonly userService: UserService,
    private readonly companyService: CompanyService
  ) { }




  async createReport(createReportDto: CreateReportDto) {
    const query = [
      {
        path: 'userId',
        select: 'fullName'
      },
      {
        path: 'majorId',
        select: 'majorName'
      },
      {
        path: 'companyId',
        select: 'companyName'
      },
      {
        path: 'teacherId',
        select: 'teacherName'
      }, {
        path: 'topicId',
        select: 'topicName'
      }, //populate nested array
    ];

    const exist = await this.reportModel.find().populate(query).lean().exec().catch(err => {
      throw new NotFoundException('Không tìm thấy' + err.message);
    });


    const _userId = this.userService.getUserById(createReportDto.userId);
    const teacherId = this.teacherService.getTeacherId(createReportDto.teacherId);
    const topicId = this.topicService.getTopicId(createReportDto.topicId);
    const companyId = this.companyService.getCompanyById(createReportDto.companyId);
    const meetId = this.meetService.getMeetById(createReportDto.meetId);


    const checkExits: ReportModel = new this.reportModel({
      ...createReportDto,
      userId: _userId,
      teacherId: teacherId,
      topicId: topicId,
      companyId: companyId
    });
    const checkUser = await this.reportModel.findOne({ userId: createReportDto.userId }).exec();
    if (checkUser == null && exist == null) {
      await checkExits.save();
    }

    const results = await this.reportModel.findOneAndUpdate({ checkExits }, {
      $push: {
        'info': {
          'reportName': createReportDto.reportName,
          'meetId': meetId,
          'active': true,
          'content': {
            'contentReport': createReportDto.contentReport,
            'teacherRequest': createReportDto.teacherRequest,
            'expectedContent': createReportDto.expectedContent,
            'image': createReportDto.image,
          },
          'reportDate': new Date(),
        }
      }
    }, { new: true, upsert: true }).exec().catch((err) => {
      throw new BadRequestException("Báo cáo đã tồn tại ")
    });
    return results;
  }


  async updateCompany(id: string, update: UpdateReportDto) {
    const query = [
      {
        path: 'userId',
        select: 'fullName'
      },
      {
        path: 'majorId',
        select: 'majorName'
      },
      {
        path: 'companyId',
        select: 'companyName'
      },
      {
        path: 'teacherId',
        select: 'teacherName'
      }, {
        path: 'topicId',
        select: 'topicName'
      }, //populate nested array
    ];

    const exist = await this.reportModel.find().populate(query).lean().exec().catch(err => {
      throw new NotFoundException('Không tìm thấy' + err.message);
    });
    const _userId = this.userService.getUserById(update.userId);
    const teacherId = this.teacherService.getTeacherId(update.teacherId);
    const topicId = this.topicService.getTopicId(update.topicId);
    const companyId = this.companyService.getCompanyById(update.companyId);
    const meetId = this.meetService.getMeetById(update.meetId); const checkExits: ReportModel = new this.reportModel({
      ...update,
      userId: _userId,
      teacherId: teacherId,
      topicId: topicId,
      companyId: companyId,
      updateAt: new Date(),
    });
    const checkUser = await this.reportModel.findOne({ userId: update.userId }).exec();
    if (checkUser == null && exist == null) {
      await checkExits.updateOne();
    }
    const results = await this.reportModel.findByIdAndUpdate({ "_id": id, active: true }, {
      $push: {
        'info': {
          'reportName': update.reportName,
          'meetId': meetId,
          'active': update.active,
          'content': {
            'contentReport': update.contentReport,
            'teacherRequest': update.teacherRequest,
            'expectedContent': update.expectedContent,
            'image': update.image,
          },
          'reportDate': new Date(),
        }
      }
    }, { new: true, upsert: true }).exec().catch((err) => {
      throw new BadRequestException("Báo cáo đã tồn tại ")
    });
    return results;
  }

  async deleteReport(id: string) {
    const report = await this.reportModel.findByIdAndUpdate({ "_id": id }, { active: false }, { new: true }).exec().catch((err) => {
      throw new NotFoundException("Không tìm thấy báo cáo để xóa!");
    });
    return report;
  }


  async getAllReport() {
    const topic = await this.reportModel.find().exec();
    return topic;
  }

  async getReportById(id: string) {
    const report = await this.reportModel.findById({ _id: id }).exec();
    if (!report) throw new NotFoundException("Không tìm thấy id báo cáo của bạn");
    return report;
  }

  async getReportByUserId(id: string) {
    const report = await this.reportModel.findOne({ userId: id }).exec();
    if (!report) throw new NotFoundException("Không tìm thấy id báo cáo của bạn");
    return report;
  }

  async getReportName(reportName: string) {
    const report = await this.reportModel.findOne({ 'info.reportName': reportName }).exec();
    if (report) throw new BadRequestException();
    return report;
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
