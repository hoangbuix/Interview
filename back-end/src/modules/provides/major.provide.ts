import { Connection } from 'mongoose';
import { MajorSchema } from 'src/schemas/major.schema';



export const MajorProviders = [
    {
        provide: 'major',
        useFactory: (connection: Connection) => connection.model('major', MajorSchema),
        inject: ['DEV_CONNECTION'],
    },
];