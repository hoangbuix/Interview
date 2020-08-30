import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    fullName: String,
    age: Number,
});
