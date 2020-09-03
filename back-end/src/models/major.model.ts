import { Document } from 'mongoose';

export interface MajorModel extends Document {
  majorId: { type: string };
  majorName: { type: string };
  createdAt: { type: number };
  updatedAt: { type: number };
}
