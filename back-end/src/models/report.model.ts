import { Document } from 'mongoose';

export interface ReportModel extends Document {
  arrayReport: [{
    userId: string,
    info: [{
      reportName: string,
      content: {
        file: string,
        image: string
      },
      teacherId: string,
      reportDate: Date,
    }],
  }]
}
