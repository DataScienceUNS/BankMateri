"use server";

import { ActionFormState } from "@/modules/shared/types/FormState";
import { z } from "zod";
import { reportingMaterialSchema } from "../schema/reportMaterialSchema";
import { getCurrentUser } from "@/modules/auth/lib/getCurrentUser";
import { createReportMaterial } from "../repositories/createReportMaterial";
import { ReportReasonSelection } from "@/config/ReportReasonSelection";
import { prisma } from "@/utils/databases/prisma";

type ReportMaterialValues = z.infer<typeof reportingMaterialSchema>;
type ActionState = ActionFormState<ReportMaterialValues, void>;

export async function handlingReportMaterial(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const rawValues = {
    reason: formData.get("reason") as string,
    details: formData.get("details") as string,
    materialId: formData.get("materialId") as string,
  };

  const validated = reportingMaterialSchema.safeParse(rawValues);

  if (!validated.success)
    return {
      success: false,
      message: ["Validation failed", "Please check the form for errors and try again."],
      errors: z.flattenError(validated.error).fieldErrors as Record<string, string[]>,
      values: rawValues,
    };

  const userData = await getCurrentUser();
  if (!userData.success)
    return {
      success: false,
      message: ["User not authenticated", "Please log in to report a material."],
      errors: {
        general: true,
      },
      values: rawValues,
    };

  const reason = ReportReasonSelection.find((r) => r.value === validated.data.reason)?.label;
  if (!reason)
    return {
      success: false,
      message: ["Invalid report reason", "Please select a valid reason for reporting this material."],
      errors: {
        reason: ["Invalid report reason"],
      },
      values: rawValues,
    };

  const checkExistingReport = await prisma.materialReport.findFirst({
    where: {
      reporter_id: userData.data?.user.id,
      material_id: rawValues.materialId,
      status: "pending",
    },
  });
  if (checkExistingReport) {
    return {
      success: false,
      message: ["You have already reported this material.", "Please wait for the review process to complete."],
      errors: {
        general: true,
      },
      values: rawValues,
    };
  }

  const insertedReport = await createReportMaterial({
    reason: reason,
    details: validated.data.details,
    materialId: rawValues.materialId,
    reporterId: userData.data?.user.id as string,
  });

  return {
    success: insertedReport.success,
    errors: {
      general: insertedReport.success ? undefined : true,
    },
    values: insertedReport.success ? {} : rawValues,
    message: ["Report submitted successfully.", "Thank you for helping us maintain the quality of our materials."],
    data: undefined,
  };
}
