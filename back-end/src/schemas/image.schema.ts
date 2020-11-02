import * as mongoose from 'mongoose';

export const ImageSchema = new mongoose.Schema({
  imageName: { type: String },
  image_file: {
    data: Buffer,
    type: String,
  },
  url: { type: String },
  size: { type: Number },
  type: { type: String },
  active: {type: Boolean, default: true},
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
