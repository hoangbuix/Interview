import * as mongoose from 'mongoose';

export const TopicSchema = new mongoose.Schema({
    topicId: { type: String },
    topicName: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
})