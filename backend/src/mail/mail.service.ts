import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  // Inject Nodemailers wrapped service
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  async sendEmailVerification(email: string, token: string) {
    const url = this.configService.get<string>('FRONTEND_URL');
    const verificationUrl = `${url}/verify-email?token=${token}`;
    // TODO: Send email with verificationUrl
    await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to Mentorme! Verify your Email',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Welcome to the platform! 👋</h2>
          <p>Please click the button below to confirm your email address and activate your account:</p>
          <a href="${verificationUrl}" style="display: inline-block; padding: 10px 20px; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">Confirm Email</a>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">If you did not request this email, you can safely ignore it.</p>
        </div>
      `,
    });
  }
}
