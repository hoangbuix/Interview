import { Connection } from 'mongoose';
import { CompanySchema } from 'src/schemas/company.schema';


export const CompanyProviders = [
    {
        provide: 'company',
        useFactory: (connection: Connection) => connection.model('company', CompanySchema),
        inject: ['DEV_CONNECTION'],
    },
];