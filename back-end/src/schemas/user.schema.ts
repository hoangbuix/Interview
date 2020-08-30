import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop()
    fullName: string;

    @Prop()
    age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
