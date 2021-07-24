import { Document } from 'mongoose';

export interface UserModel extends Document {
  readonly fullName: string;
  readonly avatar: string;
  readonly gender: string;
  readonly birthday: string;
  readonly address: string;
  readonly phone: string;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly changePasswordAt: Date;
  readonly active: boolean;
  readonly roles?: Array<any>;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
