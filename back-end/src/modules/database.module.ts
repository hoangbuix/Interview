import { Module } from '@nestjs/common';
import { DatabaseProviders } from './provides/database.provide';


@Module({
    providers: [...DatabaseProviders],
    exports: [...DatabaseProviders],
})
export class DatabaseModule { }