import { Document } from 'mongoose';

export interface MeetModel extends Document {
    readonly meetId: string,
    readonly meetName: string;
    readonly description: string;
    active: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}