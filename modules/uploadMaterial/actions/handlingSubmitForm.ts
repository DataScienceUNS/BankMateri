"use server";

import { getCurrentUser } from "@/modules/auth/lib/getCurrentUser";
import { uploadMaterialSchema } from "@/modules/uploadMaterial/schemas/uploadMaterialSchema";
import { z } from "zod";
import { createNewMaterial } from "../repositories/createNewMaterial";
import { Material } from "@/app/generated/prisma";

type UploadMaterialValues = z.infer<typeof uploadMaterialSchema>;
type FormErrors = Partial<Record<keyof UploadMaterialValues, string[]>> & {
  general?: boolean;
};
type FormState = {
  success: boolean;
  errors: FormErrors;
  values: Partial<UploadMaterialValues>;
  message?: string[];
  data?: Material;
} | null;

export const handlingSubmitForm = async (_prevState: FormState, formData: FormData): Promise<FormState> => {
  const rawValues = {
    subject: formData.get("subject") as string,
    category: formData.get("category") as string,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    academicYear: formData.get("academic-year") as string,
    meetingNo: formData.get("meeting-no") as string,
    materialType: formData.get("material-type") as string,
    source: formData.get("source") as string,
    externalUrl: formData.get("external-url") as string,
  } as unknown as UploadMaterialValues;

  const validated = uploadMaterialSchema.safeParse(rawValues);

  if (!validated.success) {
    return {
      success: false,
      message: ["Validation failed", "Please check the form for errors and try again."],
      errors: z.flattenError(validated.error).fieldErrors as Record<string, string[]>,
      values: rawValues,
    };
  }

  const userData = await getCurrentUser();
  if (!userData.success)
    return {
      success: false,
      message: ["User not authenticated", "Please log in to create a material."],
      errors: {
        general: true,
      },
      values: rawValues,
    };

  const insertedMaterial = await createNewMaterial(validated.data, userData.data?.user.id as string);

  return {
    success: insertedMaterial.success,
    errors: {
      general: insertedMaterial.success ? undefined : true,
    },
    values: validated.data,
    message: insertedMaterial.message,
    data: insertedMaterial.data as Material,
  };
};
