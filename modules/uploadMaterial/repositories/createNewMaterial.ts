import { z } from "zod";
import { uploadMaterialSchema } from "../schemas/uploadMaterialSchema";
import { prisma } from "@/utils/databases/prisma";
import { AppError } from "@/utils/errors/app-error";

export const createNewMaterial = async (formData: z.infer<typeof uploadMaterialSchema>, uploader_id: string) => {
  try {
    const insertedMaterial = await prisma.$transaction(async (tx) => {
      const subjectExists = await tx.subject.findUnique({
        where: { code: formData.subject },
        select: { id: true },
      });
      if (!subjectExists) {
        throw new AppError(404, "Subject not found");
      }

      return await prisma.material.create({
        data: {
          subject_id: subjectExists.id,
          title: formData.title,
          source: formData.source,
          content_url: formData.externalUrl,
          category: formData.category,
          material_type: formData.materialType,
          academic_year: formData.academicYear,
          meeting_number: formData.meetingNo,
          description: formData.description,
          uploader_id,
        },
      });
    });

    return {
      success: true,
      status: 200,
      message: [
        "Material created successfully",
        "Thank you for your contribution. You've saved your friends a lot of time.",
      ],
      data: insertedMaterial,
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: ["Failed to create material", "An error occurred while creating the material, please try again later."],
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
