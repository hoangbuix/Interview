import { Connection } from 'mongoose';
import { TaskSchema } from 'src/schemas/task.schema';



export const TaskProviders = [
    {
        provide: 'task',
        useFactory: (connection: Connection) => connection.model('task', TaskSchema),
        inject: ['DEV_CONNECTION'],
    },
];