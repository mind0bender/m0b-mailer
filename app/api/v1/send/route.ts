import {
  QSTASH_CURRENT_SIGNING_KEY,
  QSTASH_NEXT_SIGNING_KEY,
} from "@/app/utils/const";
import sendMail from "@/app/utils/mailer";
import { verifySignatureAppRouter } from "@upstash/qstash/dist/nextjs";

export const POST = verifySignatureAppRouter(
  async (req: Request): Promise<Response> => {
    const body = await req.json();
    const { to, subject, html } = body as {
      to: string;
      subject: string;
      html: string;
    };

    await sendMail({
      to,
      subject,
      html,
    });

    return new Response(`Content Received`);
  },
  {
    currentSigningKey: QSTASH_CURRENT_SIGNING_KEY,
    nextSigningKey: QSTASH_NEXT_SIGNING_KEY,
  },
);
