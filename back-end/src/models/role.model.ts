import { Document } from 'mongoose';

export interface RoleModel extends Document {
  roleId?: { type: string };
  roleName: { type: string };
  description: { type: string };
  createdAt: { type: number };
  updatedAt: { type: number };
}


  