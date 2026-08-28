"use server";

import { getCurrentUser } from "@/modules/auth/lib/getCurrentUser";
import { createAction } from "@/utils/actions/create-action";
import { prisma } from "@/utils/databases/prisma";
import { UnauthorizedError } from "@/utils/errors/app-error";

export const getAllUserHistories = createAction(async () => {
  const user = await getCurrentUser();
  if (!user.success)
    throw new UnauthorizedError("You are not authenticated", "You must be logged in to view your histories.");

  const histories = await prisma.history.findMany({
    where: {
      user_id: user.data.user.id,
    },
    orderBy: {
      last_accessed: "desc",
    },
    select: {
      last_accessed: true,
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
    },
  });

  return histories;
});
