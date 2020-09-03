import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user.module';
import { TeacherModule } from './modules/teacher.module';
import { TaskModule } from './modules/task.module';
import { TopicController } from './controllers/topicr.controller';

@Module({
  imports: [
    UserModule,
    TeacherModule,
    TaskModule,
    TopicController,
    MongooseModule .forRoot("mongodb+srv://hoangbuix:151998@cluster0.utilx.mongodb.net/interview?retryWrites=true&w=majority")
  ],
})
export class AppModule {}
