import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AllExceptionFilter } from './httpExceptionFilter';
import { UsersModule } from './users/users.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODBURI, {
      w: 1,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService,{
    provide:'APP_FILTER',
    useClass:AllExceptionFilter,
  },],
})
export class AppModule {}
