import * as mongoose from 'mongoose';

export const MeetSchema = new mongoose.Schema({
    meetId: { type: String },
    meetName: { type: String },
    description: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
})