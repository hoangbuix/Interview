import * as mongoose from 'mongoose';

export const MajorSchema = new mongoose.Schema({
  majorId: { type: String },
  majorName: { type: String },
  majorDescription: { type: String },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now()},
  updatedAt: { type: Date, default: Date.now()},
});
