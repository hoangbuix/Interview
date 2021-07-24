import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  taskName: { type: String },
  title: { type: String },
  description: { type: String },
  userId: { type: String, ref: 'user' },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
