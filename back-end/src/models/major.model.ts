import { Document } from 'mongoose';

export interface MajorModel extends Document {
  readonly majorName: string;
  readonly majorDescription: string;
  readonly manager: [{
    teacher: [{ teacherId: string }];
    user: [{ userId: string }];
    class: [{ classId: string }]
  }];
  readonly active: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
