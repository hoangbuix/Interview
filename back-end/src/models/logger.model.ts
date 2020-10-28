import { Document } from 'mongoose';

export interface LoggerModel extends Document{
  readonly api: string;
  readonly method: string;
  readonly from: string;
  readonly at: Date;
}
