import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const frontendUrl = configService.get<string>('FRONTEND_URL');

  // Every controller route automatically starts with /api
  app.setGlobalPrefix('api');

  // Configure CORS
  app.enableCors({
    // Only allow requests originating from this exact domain
    origin: frontendUrl,

    // Allow incoming requests to include HTTP headers containing auth tokens/cookies
    credentials: true,

    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  });

  // Parse cookies from incoming requests
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

  // Read the port from .env, defaulting to 8000 if not found
  const port = configService.get<number>('PORT') || 8000;
  await app.listen(port);

  console.log(`🚀 Server is running on: http://localhost:${port}/api`);
}
bootstrap();
