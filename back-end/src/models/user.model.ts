import { Document } from 'mongoose';
import { UserRole } from './user-role.enum';

export interface UserModel extends Document {
  readonly userId?: string;
  readonly fullName: string;
  readonly gender: string;
  readonly birthday: string;
  readonly address: string;
  readonly inClass: string;
  readonly phone: string;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly changePasswordAt: Date;
  readonly active: boolean;
  readonly roles?: Array<any>;
  readonly companyId:any;
  readonly topicId: any;
  readonly majorId: any;
  readonly teacherId: any;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
