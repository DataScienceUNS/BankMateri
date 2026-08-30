"use server";
import { getCurrentUser } from "@/modules/auth/lib/getCurrentUser";
import { createAction } from "@/utils/actions/create-action";
import { unwrap } from "@/utils/actions/unwrap-action";
import { prisma } from "@/utils/databases/prisma";
import { AppError } from "@/utils/errors/app-error";
import { after } from "next/server";

export const getMaterialDetail = createAction(async (materialId: string) => {
  const user = unwrap(await getCurrentUser());
  const data = await prisma.material.findUnique({
    where: {
      id: materialId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      category: true,
      meeting_number: true,
      academic_year: true,
      source: true,
      content_url: true,
      created_at: true,
      updated_at: true,
      uploader: {
        select: {
          full_name: true,
          profile_picture: true,
        },
      },
      subject: {
        select: {
          name: true,
          code: true,
          hex_color: true,
        },
      },
      bookmarked_by: user
        ? {
            where: {
              user_id: user?.user.id,
            },
          }
        : false,
    },
  });

  if (!data) throw new AppError(404, "Material not found");

  if (user)
    after(async () => {
      await prisma.history.upsert({
        where: {
          user_id_material_id: {
            user_id: user.user.id,
            material_id: data.id,
          },
        },
        update: {
          last_accessed: new Date(),
        },
        create: {
          user_id: user.user.id,
          material_id: data.id,
          last_accessed: new Date(),
        },
      });
    });

  return data;
});
