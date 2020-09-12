import * as mongoose from 'mongoose';

export const TopicSchema = new mongoose.Schema({
    topicId: { type: String },
    topicName: { type: String },
    description: { type: String },
    active: { type: Boolean, default: true },
    createdAt: { type: Date },
    updatedAt: { type: Date },
})