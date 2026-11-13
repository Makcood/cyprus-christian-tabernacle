import { z } from "zod";

import "server-only";

const schema = z.object({
  // Added as features need them, e.g. DATABASE_URL, YOUTUBE_API_KEY, SES_FROM_EMAIL
});

const parsed = schema.safeParse({});

if (!parsed.success) {
  throw new Error(`Invalid server environment variables:\n${z.prettifyError(parsed.error)}`);
}

export const serverEnv = parsed.data;
