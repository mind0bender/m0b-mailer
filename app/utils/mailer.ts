import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } from "./const";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const smtpConfig: SMTPTransport.Options = {
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
};

export const transpoert = nodemailer.createTransport(smtpConfig);

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
  appName?: string;
}

export default async function sendMail({
  to,
  subject,
  html,
  appName = `kayaws`,
}: SendMailOptions): Promise<void> {
  const from: string = `"${appName}" <${SMTP_USER}>`;

  await transpoert.sendMail({
    from,
    to,
    subject,
    html,
  });
}
