import { Connection } from 'mongoose';
import { LoggerSchema } from 'src/schemas/logger.schema';


export const LoggerProviders = [
    {
        provide: 'logger',
        useFactory: (connection: Connection) => connection.model('logger', LoggerSchema),
        inject: ['DEV_CONNECTION'],
    },
];