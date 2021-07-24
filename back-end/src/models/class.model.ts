import { Document } from 'mongoose';

export interface classModel extends Document {
    readonly className: string;
    readonly description: string;
    readonly active: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}