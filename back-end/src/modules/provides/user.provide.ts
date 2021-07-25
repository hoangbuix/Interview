import { Connection } from 'mongoose';
import { UserSchema } from 'src/schemas/user.schema';


export const UserProviders = [
    {
        provide: 'user',
        useFactory: (connection: Connection) => connection.model('user', UserSchema),
        inject: ['DEV_CONNECTION'],
    },
];