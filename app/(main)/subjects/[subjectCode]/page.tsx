import LoadingPage from "@/modules/shared/components/featured/LoadingPage";
import SubjectDetailPageServer from "@/modules/subjects/subjectDetail/components/features/subjectDetailPage.server";
import React from "react";

const page = async ({ params }: { params: Promise<{ subjectCode: string }> }) => {
  const { subjectCode } = await params;

  return (
    <React.Suspense fallback={<LoadingPage />}>
      <SubjectDetailPageServer code={subjectCode} />
    </React.Suspense>
  );
};

export default page;
