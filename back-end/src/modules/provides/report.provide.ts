import { Connection } from 'mongoose';
import { ReportSchema } from 'src/schemas/report.schema';



export const ReportProviders = [
    {
        provide: 'report',
        useFactory: (connection: Connection) => connection.model('report', ReportSchema),
        inject: ['DEV_CONNECTION'],
    },
];