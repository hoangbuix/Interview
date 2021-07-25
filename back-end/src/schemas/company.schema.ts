import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
    companyName: { type: String },
    description: { type: String },
    mentorCompany: { type: String },
    task: [{
        taskId: { type: String, ref: 'task' }
    }],
    startDate: { type: String },
    endDate: { type: String },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
})