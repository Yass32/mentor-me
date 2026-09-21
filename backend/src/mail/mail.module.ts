import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Global() // Make it global so Auth can use it later
@Module({
  providers: [
    MailService,

    // Provider 1: The Resend client instance
    {
      provide: 'RESEND_CLIENT',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return new Resend(config.get<string>('RESEND_API_KEY'));
      },
    },

    // Provider 2: The second item (e.g., sender email)
    {
      provide: 'FRONTEND_URL',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return config.get<string>('FRONTEND_URL');
      },
    },
  ],
  exports: [MailService], // Export MailService so AuthService can inject it
})
export class MailModule {}
