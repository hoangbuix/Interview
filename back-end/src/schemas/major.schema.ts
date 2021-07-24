import * as mongoose from 'mongoose';

export const MajorSchema = new mongoose.Schema({
  majorName: { type: String },
  majorDescription: { type: String },
  manager: [{
    teacher: [{ teacherId: { type: String, ref: 'teacher' } }],
    class: [{
      classId: { type: String, ref: 'class' },
      teacherId: { type: String, ref: 'teacher' }
    }],
    user: [{ userId: { type: String, ref: 'user' } }]
  }],
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
