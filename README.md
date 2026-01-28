# m0b mailer

A reliable, async email microservice built with Next.js and Upstash QStash.
Designed for background email delivery with retries, delays, and dead-letter handling.

## ✨ Features

- Async email delivery (fire-and-forget)

- Automatic retries with backoff

- Dead-letter queue (DLQ) support

- Signature verification (secure)

- SMTP-based sending (Nodemailer-ready)

## 🏗 Architecture

App / Backend - publish job ->
QStash - signed request ->
Next.js API (send-email) -> SMTP Provider

## 📦 Tech Stack

- Next.js

- Upstash QStash

- Nodemailer

- TypeScript

## 🔧 Environment Variables

```.env

QSTASH_TOKEN
QSTASH_CURRENT_SIGNING_KEY
QSTASH_NEXT_SIGNING_KEY

SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASS
```

## 🚀 Sending an Email

```ts
await sendMail({
  to: "<user@example.com>",
  subject: "Welcome",
  html: "<h1>Hello</h1>",
});
```

> Returns a QStash message ID for tracking.

## 🔁 Retries

Configured during publish:

```
retries: 5,
retryDelay: "30", // seconds
```

- Retries on non-2xx responses

- Exponential backoff

- No manual retry logic needed

## ☠️ Dead-Letter Queue (DLQ)

- After all retries fail, QStash calls:

```bash
POST /api/v1/send-dlq
```

- The DLQ endpoint:

- Stores failed payloads

## 🔐 Security

- All worker endpoints use QStash signature verification

- Prevents unauthorized requests

- Safe for public deployment

## 📜 License

MIT
