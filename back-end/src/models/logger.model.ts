import { Document } from 'mongoose';

export interface LoggerModel extends Document {
  readonly api: [{
    url: string;
    method: string;
  }];
  readonly from: string;
  readonly at: Date;
}
