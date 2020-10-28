import * as mongoose from 'mongoose';

export const LoggerSchema = new mongoose.Schema({
  api: { type: String },
  method: {type: String},
  from: { type: String },
  at: { type: Date },
});