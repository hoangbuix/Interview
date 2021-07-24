import { Document } from 'mongoose';

export interface TopicModel extends Document {
  topicName: string;
  description: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
