import { Document } from 'mongoose';

export interface TeacherModel extends Document {
   readonly teacherName: string;
   readonly roles?: Array<any>;
   readonly active: boolean;
   readonly createdAt: Date;
   readonly updatedAt: Date;
}
