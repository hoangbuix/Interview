import { Document } from 'mongoose';

export interface TeacherModel extends Document {
   teacherId: string;
   teacherName: string;
   active: boolean;
   createdAt: Date;
   updatedAt: Date;
}
