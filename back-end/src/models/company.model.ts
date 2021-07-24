import { Document } from "mongoose";


export interface CompanyModel extends Document {
    readonly companyName: string;
    readonly description: string;
    readonly mentorCompany: string;
    readonly task: [{
        taskId: string;
    }]
    readonly startDate: string;
    readonly endDate: string;
    readonly active: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}