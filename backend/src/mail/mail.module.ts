import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Global() // Make it global so Auth can use it later
@Module({
  imports: [
    // Use forRootAsync so we can safely read our .env secrets before connecting!
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('SMTP_HOST'),
          port: configService.get<number>('SMTP_PORT'),
          auth: {
            user: configService.get<string>('SMTP_USER'),
            pass: configService.get<string>('SMTP_PASS'),
          },
        },
        defaults: {
          from: `"My App Team" <${configService.get<string>('EMAIL_FROM')}>`,
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService], // Export MailService so AuthService can inject it
})
export class MailModule {}
