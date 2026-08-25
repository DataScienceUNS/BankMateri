"use server";

import { getCurrentUser } from "@/modules/auth/lib/getCurrentUser";
import { createAction } from "@/utils/actions/create-action";
import { prisma } from "@/utils/databases/prisma";
import { AppError } from "@/utils/errors/app-error";

export const getAllUserBookmark = createAction(async () => {
  const user = await getCurrentUser();
  if (!user.success) throw new AppError(403, "User not authenticated");

  return await prisma.bookmark.findMany({
    where: {
      user_id: user.data?.user.id,
    },
    select: {
      material: {
        include: {
          subject: {
            select: {
              name: true,
              code: true,
            },
          },
        },
      },
      saved_at: true,
    },
  });
});
