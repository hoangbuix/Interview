import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateMeetDto } from "src/dto/create-meet.dto";
import { BadRequestException } from "src/exceptions/bad-request.exception";
import { NotFoundException } from "src/exceptions/not-found.exception";
import { MeetModel } from "src/models/meet.model";


@Injectable()
export class MeetService {
    constructor(@InjectModel('meeting') private readonly meetModel: Model<MeetModel>) { }

    async getAll() {
        return await this.meetModel.find().exec();
    }

    async createMeet(createMeetDto: CreateMeetDto) {
        const checkExit = await this.meetModel.findOne({ meetName: createMeetDto.meetName });
        if (checkExit) throw new BadRequestException("Tên này đã tồn tại!")

        const newMeet: MeetModel = new this.meetModel({
            ...createMeetDto,
            createdAt: new Date,
            updatedAt: new Date(),
        });
        const createdMeet = new this.meetModel(newMeet);
        return await createdMeet.save();
    }

    async getMeetById(id: string) {
        const meet = await this.meetModel.findById({_id: id }).exec()
        if (!meet) throw new NotFoundException("Id này không tồn tại");
        return meet;
    }

}