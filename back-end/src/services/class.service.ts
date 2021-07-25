import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BadRequestException } from "src/exceptions/bad-request.exception";
import { NotFoundException } from "src/exceptions/not-found.exception";
import { ClassModel } from "src/models/class.model";
import { UserRole } from "src/utils/user-role.enum";


@Injectable()
export class ClassService {
    constructor(@InjectModel('class') private readonly classModel: Model<ClassModel>) { }

    // async createMeet(createMeetDto: CreateMeetDto) {
    //     const checkExit = await this..findOne({ meetName: createMeetDto.meetName });
    //     if (checkExit) throw new BadRequestException("Tên này đã tồn tại!")

    //     const newMeet: MeetModel = new this.meetModel({
    //         ...createMeetDto,
    //         createdAt: new Date,
    //         updatedAt: new Date(),
    //     });
    //     const createdMeet = new this.meetModel(newMeet);
    //     return await createdMeet.save();
    // }

    // async updateClass(id: string, update: UpdateMeetDto): Promise<classModel> {
    //     const meet = await this.meetModel.findByIdAndUpdate({ "_id": id, active: true }, { meetName: update.meetName, description: update.description, active: update.active, updatedAt: new Date() }, { new: true }).exec().catch(err => {
    //         throw new NotFoundException('Không tìm thấy cuộc đối thoại này của bạn yêu cầu!');
    //     });
    //     return meet;
    // }

    async deleteClass(id: string) {
        const _class = await this.classModel.findByIdAndUpdate({ "_id": id },
            { active: false }, { new: true }).exec().catch((err) => {
                throw new NotFoundException("Không tìm thấy lớp học để xóa!");
            });
        return _class;
    }

    async getAll() {
        return await this.classModel.find().exec();
    }

    async getClassById(id: string) {
        const _class = await this.classModel.findById({ _id: id }).exec()
        if (!_class) throw new NotFoundException("Id này không tồn tại");
        return _class;
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