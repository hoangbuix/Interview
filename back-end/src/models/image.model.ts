import { Document } from 'mongoose';

export interface ImageModel extends Document {
  readonly imageName: string;
  readonly image_file: string;
  readonly url: string;
  readonly size: number;
  readonly type: string;
  readonly active: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
