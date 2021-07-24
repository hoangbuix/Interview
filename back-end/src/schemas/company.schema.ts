import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
    companyId: { type: String },
    companyName: { type: String },
    description: { type: String },
    mentorCompany: { type: String },
    task: {
        type: [{ type: String }],
        required: true,
        default: null as [] | null,
    },
    startDate: { type: String },
    endDate: { type: String },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
})