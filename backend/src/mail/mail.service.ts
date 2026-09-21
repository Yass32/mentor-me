import { Inject, Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  constructor(
    @Inject('RESEND_CLIENT') private resend: Resend,
    @Inject('FRONTEND_URL') private frontendUrl: string,
  ) {}

  sendEmailVerification(email: string, token: string) {
    const verificationUrl = `${this.frontendUrl}/verify-email?token=${token}`;

    // TODO: Send email with verificationUrl
    this.resend.emails.send({
      from: 'MentorMe <noreply@mentorme.com>',
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
