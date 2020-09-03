import { Document } from 'mongoose';

export interface TopicModel extends Document {
  topicId: string;
  topicName: string;
  createdAt: number;
  updatedAt: number;
}
