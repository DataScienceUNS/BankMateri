import { z } from "zod";
import { uploadMaterialSchema } from "../schemas/uploadMaterialSchema";
import { prisma } from "@/utils/databases/prisma";

export const createNewMaterial = async (
  formData: z.infer<typeof uploadMaterialSchema>,
  uploader_id: string,
) => {
  try {
    const insertedMaterial = await prisma.material.create({
      data: {
        subject_id: formData.subject,
        title: formData.title,
        content_url: formData.externalUrl,
        category: formData.category,
        material_type: formData.materialType,
        academic_year: formData.academicYear,
        meeting_number: formData.meetingNo,
        uploader_id,
      },
    });
    return {
      success: true,
      status: 200,
      message: "Material created successfully",
      data: insertedMaterial,
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: "An error occurred while creating the material",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
