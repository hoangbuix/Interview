import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTopicDto } from "src/dto/create-dto/create-topic.dto";
import { UpdateTopicDto } from "src/dto/update-dto/update-topic.dto";
import { BadRequestException } from "src/exceptions/bad-request.exception";
import { NotFoundException } from "src/exceptions/not-found.exception";
import { TopicModel } from "src/models/topic.model";
import { UserRole } from "src/utils/user-role.enum";

@Injectable()
export class TopicService {
    constructor(@InjectModel('topic') private readonly topicModel: Model<TopicModel>) { }



    async createTopic(createTopicDto: CreateTopicDto) {
        const checkExit = await this.topicModel.findOne({ topicId: createTopicDto.topicId });
        if (checkExit) throw new BadRequestException("Đề tài này đã tồn tại!")

        const newTopic: TopicModel = new this.topicModel({
            ...createTopicDto,
            createdAt: new Date,
            updatedAt: new Date(),
        });
        const createdTopic = new this.topicModel(newTopic);
        return await createdTopic.save();
    }

    async updateTopic(id: string, update: UpdateTopicDto): Promise<TopicModel> {
        const topic = await this.topicModel.findByIdAndUpdate({ "_id": id, active: true }, { topicName: update.topicName, description: update.description, active: update.active, updatedAt: new Date() }, { new: true }).exec().catch((err) => {
            throw new NotFoundException('Không tìm thấy chủ đề này của bạn yêu cầu!');
        });
        return topic;
    }

    async deleteTopic(id: string) {
        const topic = await this.topicModel.findByIdAndUpdate({ "_id": id }, { active: false }, { new: true }).exec().catch((err) => {
            throw new NotFoundException("Không tìm thấy chủ đề để xóa!");
        });
        return topic;
    }

    async getAll() {
        return this.topicModel.find().exec();
    }

    async getTopicId(topicId: string) {
        const topic = await this.topicModel.findById({ _id: topicId }).exec()
        if (!topic) throw new NotFoundException("Đề tài này không tồn tại");
        return topic;
    }

    async getTopicName(topicName: string) {
        const topic = await this.topicModel.findOne({ topicName: topicName }).exec();
        if (!topic) throw new NotFoundException("Tên đề tài không tìm thấy!");
        return topic;
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