"use server";

import { createAction } from "@/utils/actions/create-action";
import { prisma } from "@/utils/databases/prisma";

export const getDetailSubject = createAction(async (code: string) => {
  return await prisma.subject.findUnique({
    where: {
      code,
    },
    select: {
      code: true,
      name: true,
      hex_color: true,
      term: true,
      materials: {
        select: {
          id: true,
          title: true,
          description: true,
          category: true,
          meeting_number: true,
          source: true,
          content_url: true,
          created_at: true,
          uploader: {
            select: {
              full_name: true,
            },
          },
        },
      },
    },
  });
});
