"use server";

import { getCurrentUser } from "@/modules/auth/lib/getCurrentUser";
import { createAction } from "@/utils/actions/create-action";

export const addMaterialToBookmark = createAction(async (materialId: string) => {
  const user = await getCurrentUser();
  return user;
});
