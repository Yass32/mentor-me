import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // Inject ConfigService into the constructor!
  constructor(private configService: ConfigService) {
    // Use it to safely grab your secret from the .env file!
    const dbUrl = configService.get<string>('DATABASE_URL');
    // Initialize the adapter with your connection string
    const adapter = new PrismaPg({
      connectionString: dbUrl!,
    });

    // Pass the adapter to super()
    super({
      adapter,
    });
  }

  async onModuleInit() {
    // Connects to the database when the module initializes
    await this.$connect();
  }

  async onModuleDestroy() {
    // Gracefully disconnects when the application shuts down
    await this.$disconnect();
  }
}
