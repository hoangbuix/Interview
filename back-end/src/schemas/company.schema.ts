import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
    companyId: { type: String },
    companyName: { type: String },
    description: { type: String },
    mentorCompany: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
})