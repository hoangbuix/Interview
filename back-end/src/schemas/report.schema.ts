import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
    userId: { type: String },
    teacherId: { type: String },
    info: [{
        reportName: { type: String },
        meetId: { type: String },
        reportDate: { type: Date },
        content: [{
            contentReport: { type: String },
            teacherRequest: { type: String },
            expectedContent: { type: String },
            image: { type: String }
        }],
    }],
})