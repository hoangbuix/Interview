import * as mongoose from 'mongoose';
import { default as config } from '../../configuration/config';


const userString = config.db.user && config.db.pass ? (config.db.user + ':' + config.db.pass + '@') : '';
const authSource = config.db.authSource ? ('?authSource=' + config.db.authSource + '&w=1') : '';
const dv = "mongodb+srv://hoangbuix:151998@cluster0.utilx.mongodb.net/interview?retryWrites=true&w=majority";


export const DatabaseProviders = [
    {
        provide: 'DEV_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect(dv || 'mongodb://' + userString +
                config.db.host + ':' + (config.db.port || '27017') + '/' + config.db.database + authSource),
    },
];