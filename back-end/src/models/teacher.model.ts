import { Document } from 'mongoose';

export interface TeacherModel extends Document {
   teacherName: string;
   active: boolean;
   createdAt: Date;
   updatedAt: Date;
}
