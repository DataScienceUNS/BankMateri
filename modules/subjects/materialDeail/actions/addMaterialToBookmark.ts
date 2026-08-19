"use server";

import { getCurrentUser } from "@/modules/auth/lib/getCurrentUser";
import { createAction } from "@/utils/actions/create-action";
import { unwrap } from "@/utils/actions/unwrap-action";
import { prisma } from "@/utils/databases/prisma";
import { AppError } from "@/utils/errors/app-error";

export const addMaterialToBookmark = createAction(async ({ materialId }: { materialId: string }) => {
  const user = await getCurrentUser();
  if (!user.success) throw new AppError(401, "Unauthorized");

  await prisma.bookmark.create({
    data: {
      user_id: unwrap(user)?.user.id as string,
      material_id: materialId,
    },
  });

  return {
    is_bookmarked: true,
  };
});
