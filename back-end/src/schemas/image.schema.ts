import * as mongoose from 'mongoose';

export const ImageSchema = new mongoose.Schema({
  imageId: { type: String },
  imageName: { type: String },
  size: { type: Number },
  type: { type: String },
  createdAt: { type: Number },
  updatedAt: { type: Number },
});
