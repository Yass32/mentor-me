import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Configure the baseline rate limits
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000, // 1 second window
        limit: 3, // Max 3 requests per second
      },
      {
        name: 'medium',
        ttl: 60000, // 60 second (1 minute) window
        limit: 100, // Max 100 requests per minute
      },
    ]),
    PrismaModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    // ThrottlerGuard is global, now EVERY endpoint in your entire app is protected by default.
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    AppService,
    UsersService,
  ],
})
export class AppModule {}
