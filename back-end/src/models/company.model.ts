import { Document } from "mongoose";


export interface CompanyModel extends Document {
    companyId: string;
    companyName: string;
    description: string;
    mentorCompany: string;
    startDate: Date;
    endDate: Date;
}