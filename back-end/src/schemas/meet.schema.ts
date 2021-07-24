import * as mongoose from 'mongoose';

export const MeetSchema = new mongoose.Schema({
    meetName: { type: String },
    description: { type: String },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
})