import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTopicDto } from "src/dto/create-topic.dto";
import { BadRequestException } from "src/exceptions/bad-request.exception";
import { NotFoundException } from "src/exceptions/not-found.exception";
import { TopicModel } from "src/models/topic.model";

@Injectable()
export class TopicService {
    constructor(@InjectModel('topic') private readonly topicModel: Model<TopicModel>) { }

    async getAll() {
        return this.topicModel.find().exec();
    }

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

    async getTopicId(topicId: string) {
        const topic = await this.topicModel.findById({_id: topicId }).exec()
        if (!topic) throw new NotFoundException("Đề tài này không tồn tại");
        return topic;
    }

    async getTopicName(topicName: string) {
        const topic = await this.topicModel.findOne({ topicName: topicName }).exec();
        if (!topic) throw new NotFoundException("Tên đề tài không tìm thấy!");
        return topic;
    }
}