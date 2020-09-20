import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userId: { type: String },
  fullName: { type: String },
  gender: { type: String },
  birthday: { type: String },
  address: { type: String },
  inClass: { type: String },
  phone: { type: String },
  email: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  changePasswordAt: { type: Date },
  active: { type: Boolean, default: true },
  roles: {
    type: [{ type: String, enum: ['admin', 'user', 'manager', 'teacher'] }],
    required: true,
    default: ['user'],
  },
  companyId: { type: String },
  topicId: { type: String },
  majorId: { type: String },
  teacherId: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
