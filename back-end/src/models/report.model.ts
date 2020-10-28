import { Document } from 'mongoose';

export interface ReportModel extends Document {
  userId: string,
  teacherId: string;
  companyId: string;
  info: [{
    reportName: string,
    meetId: string,
    active: boolean,
    content: {
      contentReport: string,
      teacherRequest: string,
      expectedContent: string,
      image: string
    },
    reportDate: Date,
  }],
}
