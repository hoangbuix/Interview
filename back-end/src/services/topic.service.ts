import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TopicModel } from 'src/models/topic.model';

@Injectable()
export class TopicService {
  constructor(
    @InjectModel('topic') private readonly topicModel: Model<TopicModel>,
  ) {}

  async getAllTopics() {
    const topic = await this.topicModel.find().exec();
    return topic;
  }
}
