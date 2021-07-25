import { Connection } from 'mongoose';
import { TeacherSchema } from 'src/schemas/teacher.schema';



export const TeacherProviders = [
    {
        provide: 'teacher',
        useFactory: (connection: Connection) => connection.model('teacher', TeacherSchema),
        inject: ['DEV_CONNECTION'],
    },
];