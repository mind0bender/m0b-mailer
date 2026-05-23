import Endpoint from './endpoint';

export default function UsageSection() {
	return (
		<div className="w-full">
			<h3 className="text-2xl font-bold my-12">Basic Usage</h3>
			<div className="w-full flex flex-col justify-center items-center gap-8">
				<Endpoint
					desc="Create a reusable helper to send emails with QStash integration"
					code={`import { Client, PublishToApiResponse } from "@upstash/qstash";
import { MAILER_URL, QSTASH_TOKEN } from "./const";

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
  appName?: string;
}

const qstash = new Client({
  token: QSTASH_TOKEN,
});

export interface MailOptions {
  to: string;
  subject: string;
  html: string;
  appName?: string;
}

export interface MailResponseType {
  success: boolean;
  messageId: string;
  retries: number;
}

export default async function sendMail({
  to,
  subject,
  html,
  appName,
}: SendMailOptions): Promise<string> {
  const res: PublishToApiResponse = (await qstash.publishJSON<MailOptions>({
    url: \`\${MAILER_URL}/api/v1/send\`,
    failureCallback: \`\${MAILER_URL}/api/v1/send-dlq\`,
    body: {
      to,
      subject,
      html,
      appName,
    },
  })) as PublishToApiResponse;
  return res.messageId;
}`}
				/>
			</div>
		</div>
	);
}
