import { Document } from 'mongoose';

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
  readonly roles: string;
  readonly companyId: any;
  readonly topicId: any;
  readonly majorId: any;
  readonly teacherId: any;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
