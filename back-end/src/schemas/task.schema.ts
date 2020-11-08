import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  taskId: { type: String },
  taskName: { type: String },
  title: { type: String },
  description: { type: String },
  userId: { type: String },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
