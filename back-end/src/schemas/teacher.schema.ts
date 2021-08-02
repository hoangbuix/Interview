import * as mongoose from 'mongoose';
import { TeacherRole } from 'src/utils/teacher-role.enum';

export const TeacherSchema = new mongoose.Schema({
  teacherName: { type: String },
  role: {
    type: [{ type: String }],
    required: true,
    default: TeacherRole.teacher,
  },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
