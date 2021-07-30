// import { default as config } from './config';


// const userString = config.db.user && config.db.pass ? (config.db.user + ':' + config.db.pass + '@') : '';
// const authSource = config.db.authSource ? ('?authSource=' + config.db.authSource + '&w=1') : '';
// let dv: string = "mongodb+srv://hoangbuix:151998@cluster0.utilx.mongodb.net/interview?retryWrites=true&w=majority";



export enum Configuration {
    HOST = 'localhost:',
    PORT = '9090',
    MONGO_URI = 'mongodb+srv://hoangbuix:151998@cluster0.utilx.mongodb.net/interview?retryWrites=true&w=majority',
    JWT_KEY = 'JWT_KEY',
}