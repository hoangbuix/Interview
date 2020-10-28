import { Document } from 'mongoose';

export interface MajorModel extends Document {
  readonly majorId: string ;
  readonly majorName: string;
  readonly majorDescription: string ;
  active: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
