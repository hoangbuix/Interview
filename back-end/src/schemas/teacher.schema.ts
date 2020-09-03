import * as mongoose from 'mongoose';

export const TeacherSchema = new mongoose.Schema({
  teacherId: { type: String },
  teacherName: { type: String },
  createdAt: { type: Number },
  updatedAt: { type: Number },
});
