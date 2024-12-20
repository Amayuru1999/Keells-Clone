import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import { TransformationInterceptor } from './responseInterceptor';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new TransformationInterceptor())
  const port = process.env.PORT;
  await app.listen(port);
  console.log(`Server is running on ${port} 🚀`);
}
bootstrap();
