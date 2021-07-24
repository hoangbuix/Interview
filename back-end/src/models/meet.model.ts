import { Document } from 'mongoose';

export interface MeetModel extends Document {
    readonly meetId: string,
    readonly meetName: string;
    readonly description: string;
    readonly active: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}