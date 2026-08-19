"use client";

import { getCurrentUser } from "@/modules/auth/lib/getCurrentUser";
import { createAction } from "@/utils/actions/create-action";
import { unwrap } from "@/utils/actions/unwrap-action";
import { prisma } from "@/utils/databases/prisma";
import { AppError } from "@/utils/errors/app-error";

export const removeMaterialFromBookmark = createAction(async ({ materialId }: { materialId: string }) => {
  const user = await getCurrentUser();
  if (!user.success) throw new AppError(401, "Unauthorized");

  const bookmark = await prisma.bookmark.delete({
    where: {
      user_id_material_id: {
        user_id: unwrap(user)?.user.id as string,
        material_id: materialId,
      },
    },
  });

  if (!bookmark) throw new AppError(404, "Bookmark not found");
  return {
    is_bookmarked: false,
  };
});
