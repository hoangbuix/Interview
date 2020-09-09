import { Document } from 'mongoose';

export interface MajorModel extends Document {
  readonly majorId: string ;
  readonly majorName: string;
  readonly majorDescription: string ;
  readonly createdAt: number;
  readonly updatedAt: number;
}
