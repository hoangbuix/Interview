import { Connection } from 'mongoose';
import { TopicSchema } from 'src/schemas/topic.schema';


export const TopicProviders = [
    {
        provide: 'topic',
        useFactory: (connection: Connection) => connection.model('topic', TopicSchema),
        inject: ['DEV_CONNECTION'],
    },
];