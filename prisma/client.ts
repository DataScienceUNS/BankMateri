import { PrismaClient } from "@/generated/prisma/client";
import { adapter } from "./adapter";

export const prisma = new PrismaClient({
  adapter,
});
