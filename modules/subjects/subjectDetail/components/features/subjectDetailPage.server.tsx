import React from "react";
import { getDetailSubject } from "../../actions/getDetailSubject";
import ErrorPage from "@/modules/shared/components/featured/ErrorPage";
import SubjectDetailPageClient from "./subjectDetailPage.client";

const subjectDetailPageServer = async ({ code }: { code: string }) => {
  const response = await getDetailSubject(code);
  if (!response.success) return <ErrorPage />;
  return <SubjectDetailPageClient detail={response.data} />;
};

export default subjectDetailPageServer;
