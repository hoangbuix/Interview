import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
    arrayReport: [{
        userId: { type: String },
        info: [{
            reportName: { type: String },
            content: new mongoose.Schema({
                file: { type: String },
                image: { type: String }
            }),
            teacherId: { type: String },
            reportDate: { type: Date, default: Date.now() },
        }],
    }]
})