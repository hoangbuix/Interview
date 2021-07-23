import { Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UserRole } from 'src/models/user-role.enum';

export const UserSchema = new mongoose.Schema({
  userId: { type: String },
  fullName: { type: String },
  gender: { type: String },
  birthday: { type: String },
  avatar: { type: String },
  address: { type: String },
  inClass: { type: String },
  phone: { type: String },
  email: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  changePasswordAt: { type: Date },
  active: { type: Boolean, default: true },
  roles: {
    type: [{ type: String }],
    required: true,
    default: UserRole.user,
  },
  companyId: { type: String, ref: 'company' },
  topicId: { type: String, ref: 'topic' },
  majorId: { type: String, ref: 'major' },
  teacherId: { type: String, ref: 'teacher' },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
