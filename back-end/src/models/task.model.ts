import { Document } from 'mongoose';

export interface TaskModel extends Document {
  taskId: string;
  taskName: string;
  title: string;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
