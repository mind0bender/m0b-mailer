import {verifySignatureAppRouter} from '@upstash/qstash/dist/nextjs';
import {NextResponse} from 'next/server';

export const POST = verifySignatureAppRouter(async function (
	req: Request,
): Promise<NextResponse<{success: true}>> {
	const payload = await req.json();

	console.warn('Received a Dead Email');
	console.log(payload);

	await fetch('https://ntfy.sh/m0b-mailer', {
		method: 'POST',
		body: JSON.stringify(payload, null, 2),
	});

	return NextResponse.json({
		success: true,
	});
});
