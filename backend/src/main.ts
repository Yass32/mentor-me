import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.use(cookieParser(configService.get('JWT_SECRET')));

  // 👈 Register the Validation Pipe globally for all endpoints
  app.useGlobalPipes(
    new ValidationPipe({
      // Strip away any properties that do not have any decorators in the Data Transfer Object
      whitelist: true,

      // Throw an HTTP 400 Bad Request if non-whitelisted properties are present
      forbidNonWhitelisted: true,

      // Automatically convert network strings "?id=42" into expected TypeScript types  "number 42"
      transform: true,
    }),
  );

  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
