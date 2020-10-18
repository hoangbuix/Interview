import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCompanyDto } from "src/dto/create-company.dto";
import { NotFoundException } from "src/exceptions/not-found.exception";
import { CompanyModel } from "src/models/company.model";


@Injectable()
export class CompanyService {
    constructor(@InjectModel('company') private readonly companyModel: Model<CompanyModel>) {}


    async getAll(): Promise<CompanyModel[]> {
        return this.companyModel.find().exec();
    }

    async createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyModel> {
        const exitCompany = await this.companyModel.findOne({companyName: createCompanyDto.companyName}).exec();
        if(exitCompany) throw new NotFoundException('Công ty đã tồn tại!');
        const company: CompanyModel = new this.companyModel(createCompanyDto);
        return await company.save();
    }

    async getCompanyById(id: string) {
        const company = await this.companyModel.findById({_id: id }).exec()
        if (!company) throw new NotFoundException(`${id} này không tồn tại`);
        return company;
    }

}