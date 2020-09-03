import { Document } from 'mongoose';

export interface TeacherModel extends Document {
  teacherId: string;
  teacherName: string;
  createdAt: Date;
  updatedAt: Date;
}
