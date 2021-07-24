import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
    userId: { type: String, ref: 'user' },
    teacherId: { type: String, ref: 'teacher' },
    companyId: { type: String, ref: 'company' },
    topicId: { type: String, ref: 'topic' },
    info: [{
        reportName: { type: String },
        meetId: { type: String, ref: 'meet' },
        reportDate: { type: Date, default: Date.now() },
        active: { type: Boolean, default: true },
        content: [{
            contentReport: { type: String },
            teacherRequest: { type: String },
            expectedContent: { type: String },
            image: { type: String, ref: 'image' }
        }],
    }],
})