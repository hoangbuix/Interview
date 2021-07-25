import { Connection } from 'mongoose';
import { MeetSchema } from 'src/schemas/meet.schema';



export const MeetProviders = [
    {
        provide: 'meet',
        useFactory: (connection: Connection) => connection.model('meet', MeetSchema),
        inject: ['DEV_CONNECTION'],
    },
];