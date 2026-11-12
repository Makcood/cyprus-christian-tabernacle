import { env } from "@/config/env";

export const site = {
  name: "Cyprus Christian Tabernacle",
  shortName: "CCT",
  author: "Cyprus Christian Tabernacle",
  url: env.siteUrl,
  description:
    "Official website of the Cyprus Christian Tabernacle, sharing its sermons, songs, books and beliefs.",
  locale: "en_GB",
} as const;
