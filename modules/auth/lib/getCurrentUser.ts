"use server";

import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { createAction } from "@/utils/actions/create-action";
import { UserJwtPayload } from "@/modules/shared/types/UserJwtPayload";
import { AppError, UnauthorizedError } from "@/utils/errors/app-error";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export const getCurrentUser = createAction(async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) throw new UnauthorizedError("User not authenticated");

  const { payload } = await jwtVerify(token, JWT_SECRET);
  return payload as unknown as UserJwtPayload;
});
