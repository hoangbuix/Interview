import * as mongoose from 'mongoose';

export const MajorSchema = new mongoose.Schema({
  majorId: { type: String },
  majorName: { type: String },
  majorDescription: { type: String },
  createdAt: { type: Number },
  updatedAt: { type: Number },
});
