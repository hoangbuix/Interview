import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
    userId: { type: String },
    topicId: { type: String },
    teacherId: { type: String },
    info: [{
        reportName: { type: String },
        meetId: { type: String },
        companyId: { type: String },
        content: new mongoose.Schema({
            contentReport: { type: String },
            teacherRequest: { type: String },
            expectedContent: { type: String },
            image: { type: String }
        }),
        reportDate: { type: Date },
    }],
})