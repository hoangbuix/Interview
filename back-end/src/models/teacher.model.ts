import { Document } from 'mongoose';

export interface TeacherModel extends Document {
   teacherName: string;
   role: any;
   active: boolean;
   createdAt: Date;
   updatedAt: Date;
}
