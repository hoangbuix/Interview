import { Document } from 'mongoose';

export interface MeetModel extends Document {
    readonly meetName: string;
    readonly description: string;
    readonly active: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}