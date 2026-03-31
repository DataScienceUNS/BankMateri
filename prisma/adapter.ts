import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "@prisma/config";
import "dotenv/config";

export const adapter = new PrismaPg({
  connectionString: env("DATABASE_URL"),
});
