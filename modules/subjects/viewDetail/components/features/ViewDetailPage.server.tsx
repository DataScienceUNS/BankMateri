import React from "react";
import { getDetailSubject } from "../../actions/getDetailSubject";
import ViewDetailPageClient from "./ViewDetailPage.client";
import ErrorPage from "@/modules/shared/components/featured/ErrorPage";

const ViewDetailPageServer = async ({ code }: { code: string }) => {
  const response = await getDetailSubject(code);
  if (!response.success) return <ErrorPage />;
  return <ViewDetailPageClient detail={response.data} />;
};

export default ViewDetailPageServer;
