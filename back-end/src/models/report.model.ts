import { Document } from 'mongoose';

export interface ReportModel extends Document {
  userId: string,
  teacherId: string;
  info: [{
    reportName: string,
    meetId: string,
    content: {
      contentReport: string,
      teacherRequest: string,
      expectedContent: string,
      image: string
    },
    reportDate: Date,
  }],
}
