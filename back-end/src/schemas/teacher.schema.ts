import * as mongoose from 'mongoose';

export const TeacherSchema = new mongoose.Schema({
  teacherName: { type: String },
  role: [{ type: String }],
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
