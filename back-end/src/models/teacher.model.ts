import { Document } from 'mongoose';

export interface TeacherModel extends Document {
   teacherName: string;
   role: string;
   active: boolean;
   createdAt: Date;
   updatedAt: Date;
}
