"use server";

import { unwrap } from "@/utils/actions/unwrap-action";
import { prisma } from "@/utils/databases/prisma";
import { getCurrentUser } from "@/modules/auth/lib/getCurrentUser";
import { Subject } from "@/app/generated/prisma";
import { redirect } from "next/navigation";

export type AddSubjectState = {
  success: boolean;
  message: string;
  subject?: Subject;
} | null;

export const handlingAddSubjectForm = async (_prevState: AddSubjectState, formData: FormData) => {
  const name = formData.get("name") as string;
  const keyword = formData.get("keyword") as string;
  const hex_color = formData.get("hex_color") as string;
  const code = formData.get("code") as string;
  const term = formData.get("term") as string | number;
  const user = unwrap(await getCurrentUser());

  if (user?.user.access_type !== "admin")
    return { success: false, message: "You are not authorized to perform this action." };

  if (!name || !keyword || !hex_color || !code || !term) {
    return { success: false, message: "Name and keyword are required." };
  }

  try {
    await prisma.subject.create({
      data: {
        name,
        code,
        keyword,
        hex_color,
        term: Number(term),
        uploader_id: user.user.id,
      },
    });
  } catch (err) {
    void err;
    return {
      success: false,
      message: "Server Error",
    };
  }

  redirect("/admin/subjects");
};
