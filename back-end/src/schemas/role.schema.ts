import * as mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({
  roleId: { type: String },
  roleName: { type: String },
  description: { type: String },
  createdAt: { type: Number },
  updatedAt: { type: Number },
});
