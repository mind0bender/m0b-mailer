import {
	QSTASH_CURRENT_SIGNING_KEY,
	QSTASH_NEXT_SIGNING_KEY,
} from '@/app/utils/const';
import sendMail from '@/app/utils/mailer';
import {verifySignatureAppRouter} from '@upstash/qstash/dist/nextjs';
import {NextResponse} from 'next/server';

export interface SendResponseType {
	success: boolean;
	messageId: string;
	retries: number;
}

export const POST = verifySignatureAppRouter(
	async (req: Request): Promise<NextResponse<SendResponseType>> => {
		const body = await req.json();
		const {to, subject, html, appName} = body as {
			to: string;
			subject: string;
			html: string;
			appName?: string;
		};

		const upstashMsgId: string = req.headers.get(
			'Upstash-Message-Id',
		) as string;
		const upstashRetries: number = parseInt(
			req.headers.get('Upstash-Retries') as string,
		);

		console.log({upstashMsgId});

		try {
			await sendMail({
				to,
				subject,
				html,
				appName,
			});
		} catch (e: unknown) {
			console.error(`Emailing to ${to} failed. (app: ${appName})`);
			console.error(e, {
				messageId: upstashMsgId,
				retries: upstashRetries,
			});
			return NextResponse.json<SendResponseType>(
				{
					success: false,
					messageId: upstashMsgId,
					retries: upstashRetries,
				},
				{
					status: 500,
				},
			);
		}

		return NextResponse.json<SendResponseType>({
			success: true,
			messageId: upstashMsgId,
			retries: upstashRetries,
		});
	},
	{
		currentSigningKey: QSTASH_CURRENT_SIGNING_KEY,
		nextSigningKey: QSTASH_NEXT_SIGNING_KEY,
	},
);
