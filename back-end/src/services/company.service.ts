import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCompanyDto } from "src/dto/create-dto/create-company.dto";
import { UpdateCompanyDto } from "src/dto/update-dto/update-company.dto";
import { BadRequestException } from "src/exceptions/bad-request.exception";
import { NotFoundException } from "src/exceptions/not-found.exception";
import { CompanyModel } from "src/models/company.model";
import { UserRole } from "src/utils/user-role.enum";


@Injectable()
export class CompanyService {
    constructor(@InjectModel('company') private readonly companyModel: Model<CompanyModel>) { }


    async createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyModel> {
        const exitCompany = await this.companyModel.findOne({ companyName: createCompanyDto.companyName }).exec();
        if (exitCompany) throw new NotFoundException('Công ty đã tồn tại!');
        const company: CompanyModel = new this.companyModel(createCompanyDto);
        if (exitCompany === null) {
            await company.save();
        }
        const results = await this.companyModel.findOneAndUpdate({ company }, {
            $push: {
                'task': {
                    'taskId': createCompanyDto.taskId
                }
            }
        }, { new: true, upsert: true }).exec().catch((err) => {
            throw new BadRequestException(" đã tồn tại ")
        });
        return results;
    }

    async updateCompany(id: string, update: UpdateCompanyDto): Promise<CompanyModel> {
        const company = await this.companyModel.findByIdAndUpdate({ "_id": id, active: true },
            { companyName: update.companyName, mentorCompany: update.mentorCompany, description: update.description, startDate: update.startDate, endDate: update.endDate, active: update.active, updatedAt: new Date() }, { new: true }).exec().catch((err) => {
                throw new NotFoundException('Không tìm thấy công ty này của bạn yêu cầu!');
            });
        return company;
    }

    async deleteCompany(id: string) {
        const company = await this.companyModel.findByIdAndUpdate({ "_id": id }, { active: false }, { new: true }).exec().catch((err) => {
            throw new NotFoundException("Không tìm thấy công ty để xóa!");
        });
        return company;
    }

    async getAll(): Promise<CompanyModel[]> {
        const company = await this.companyModel.find().exec().catch((err) => {
            throw new NotFoundException("Công ty không tồn tại!");
        });
        return company;
    }

    async getCompanyById(id: string) {
        const company = await this.companyModel.findById({ _id: id }).exec()
        if (!company) throw new NotFoundException(`${id} này không tồn tại`);
        return company;
    }

    async getCompanyByName(name: string) {
        const company = await this.companyModel.aggregate([
            { $match: { $text: { $search: name } } },
            { $project: { score: { $meta: "textScore" } } },
            { $match: { score: { $gt: 0.5 } } }
        ]).exec().catch(err => console.log(err))
        return company;
    }

    public getPermission = (permissions: any) => {
        const role = UserRole
        const isAdmin = permissions.includes(role.admin);
        const isUser = permissions.includes(role.user);
        const isTeacher = permissions.includes(role.teacher);
        const isStudent = permissions.includes(role.student);
        const isManager = permissions.includes(role.manager);
        return { isAdmin, isManager, isTeacher, isStudent, isUser }
    }

}