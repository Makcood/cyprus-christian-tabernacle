import { z } from "zod";

const schema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .url({ protocol: /^https?$/ })
    .refine((value) => !value.endsWith("/"), "Must not end with a trailing slash")
    .optional(),
});

const parsed = schema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

if (!parsed.success) {
  throw new Error(`Invalid environment variables:\n${z.prettifyError(parsed.error)}`);
}

const data = parsed.data;

function resolveSiteUrl(): string {
  if (data.NEXT_PUBLIC_SITE_URL) {
    return data.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("NEXT_PUBLIC_SITE_URL must be set for production builds.");
  }

  return "http://localhost:3000";
}

export const env = {
  siteUrl: resolveSiteUrl(),
} as const;
