import { Document } from 'mongoose';

export interface ReportModel extends Document {
  userId: string,
  topicId: string,
  teacherId: string;
  info: [{
    reportName: string,
    meetId: string,
    companyId: string,
    content: {
      contentReport: string,
      teacherRequest: string,
      expectedContent: string,
      image: string
    },
    reportDate: Date,
  }],
}
