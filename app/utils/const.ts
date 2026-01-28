import { ok } from "node:assert";

ok(
  process.env.QSTASH_URL,
  `QSTASH_URL is required, received ${process.env.QSTASH_URL}`,
);
ok(
  process.env.QSTASH_TOKEN,
  `QSTASH_TOKEN is required, received ${process.env.QSTASH_TOKEN}`,
);
ok(
  process.env.QSTASH_CURRENT_SIGNING_KEY,
  `QSTASH_CURRENT_SIGNING_KEY is required, received ${process.env.QSTASH_CURRENT_SIGNING_KEY}`,
);
ok(
  process.env.QSTASH_NEXT_SIGNING_KEY,
  `QSTASH_NEXT_SIGNING_KEY is required, received ${process.env.QSTASH_NEXT_SIGNING_KEY}`,
);
ok(
  process.env.SMTP_HOST,
  `SMTP_HOST is required, received ${process.env.SMTP_HOST}`,
);
ok(
  process.env.SMTP_PORT,
  `SMTP_PORT is required, received ${process.env.SMTP_PORT}`,
);
ok(
  process.env.SMTP_USER,
  `SMTP_USER is required, received ${process.env.SMTP_USER}`,
);
ok(
  process.env.SMTP_PASS,
  `SMTP_PASS is required, received ${process.env.SMTP_PASS}`,
);

export const QSTASH_URL: string = process.env.QSTASH_URL;
export const QSTASH_TOKEN: string = process.env.QSTASH_TOKEN;
export const QSTASH_CURRENT_SIGNING_KEY: string =
  process.env.QSTASH_CURRENT_SIGNING_KEY;
export const QSTASH_NEXT_SIGNING_KEY: string =
  process.env.QSTASH_NEXT_SIGNING_KEY;
export const SMTP_HOST: string = process.env.SMTP_HOST;
export const SMTP_PORT: number = parseInt(process.env.SMTP_PORT || "");
export const SMTP_USER: string = process.env.SMTP_USER;
export const SMTP_PASS: string = process.env.SMTP_PASS;
