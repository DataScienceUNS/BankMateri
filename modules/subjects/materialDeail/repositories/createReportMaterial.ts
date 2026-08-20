import { createAction } from "@/utils/actions/create-action";
import { prisma } from "@/utils/databases/prisma";

type CreateReportMaterialPayload = {
  reason: string;
  details: string;
  materialId: string;
  reporterId: string;
};

export const createReportMaterial = createAction(async (payload: CreateReportMaterialPayload) => {
  return await prisma.materialReport.create({
    data: {
      reporter_id: payload.reporterId,
      material_id: payload.materialId,
      reason: payload.reason,
      description: payload.details,
      status: "pending",
    },
  });
});
