import { Document } from 'mongoose';

export interface TeacherModel extends Document {
  readonly teacherId: string;
  readonly teacherName: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
