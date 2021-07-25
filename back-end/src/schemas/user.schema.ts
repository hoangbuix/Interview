import * as mongoose from 'mongoose';
import { UserRole } from 'src/utils/user-role.enum';

export const UserSchema = new mongoose.Schema({
  fullName: { type: String },
  gender: { type: String },
  birthday: { type: String },
  avatar: { type: String },
  address: { type: String },
  phone: { type: String },
  email: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  changePasswordAt: { type: Date, default: null },
  active: { type: Boolean, default: true },
  roles: {
    type: [{ type: String }],
    required: true,
    default: UserRole.user,
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
