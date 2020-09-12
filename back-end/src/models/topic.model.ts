import { Document } from 'mongoose';

export interface TopicModel extends Document {
  topicId: string;
  topicName: string;
  description: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
