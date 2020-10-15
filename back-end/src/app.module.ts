import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user.module';
import { TeacherModule } from './modules/teacher.module';
import { TaskModule } from './modules/task.module';
import { MajorModule } from './modules/major.module';
import { ReportModule } from './modules/report.module';
import { TopicModule } from './modules/topic.module';
import { CompanyModule } from './modules/company.module';
import { MeetModule } from './modules/meet.module';
import { AuthModule } from './auth/auth.module';
import { default as config } from './config';

const userString = config.db.user && config.db.pass ? (config.db.user + ':' + config.db.pass + '@') : '';
const authSource = config.db.authSource ? ('?authSource=' + config.db.authSource + '&w=1') : '';
const dv = "mongodb+srv://hoangbuix:151998@cluster0.utilx.mongodb.net/interview?retryWrites=true&w=majority"

@Module({
  imports: [
    MongooseModule.forRoot(dv || 'mongodb://' + userString + config.db.host + ':' + (config.db.port || '27017') + '/' + config.db.database + authSource),
    UserModule,
    TeacherModule,
    TaskModule,
    ReportModule,
    MajorModule,
    TopicModule,
    CompanyModule,
    MeetModule,
    AuthModule
  ],
})
export class AppModule { }