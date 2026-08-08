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
          uploader_id,
        },
      });
    });

    return {
      success: true,
      status: 200,
      message: "Material created successfully",
      data: insertedMaterial,
    };
  } catch (error) {
    console.error("Error creating new material:", error);
    console.log("Form Data:", formData);
    return {
      success: false,
      status: 500,
      message: "An error occurred while creating the material",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
