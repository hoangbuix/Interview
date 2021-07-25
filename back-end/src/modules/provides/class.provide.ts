import { Connection } from 'mongoose';
import { ClassSchema } from 'src/schemas/class.schema';



export const ClassProviders = [
    {
        provide: 'class',
        useFactory: (connection: Connection) => connection.model('class', ClassSchema),
        inject: ['DEV_CONNECTION'],
    },
];