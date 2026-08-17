import React from "react";
import { getMaterialDetail } from "../actions/getMaterialDetail";
import ErrorPage from "@/modules/shared/components/featured/ErrorPage";
import MaterialDetailPageClient from "./MaterialDetailPage.client";

const MaterialDetailPageServer = async ({ materialId }: { materialId: string }) => {
  const response = await getMaterialDetail(materialId);
  if (!response.success) return <ErrorPage />;
  return <MaterialDetailPageClient materialPayload={response.data} />;
};

export default MaterialDetailPageServer;
