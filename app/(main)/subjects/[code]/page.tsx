import LoadingPage from "@/modules/shared/components/featured/LoadingPage";
import ViewDetailPageServer from "@/modules/subjects/viewDetail/components/features/ViewDetailPage.server";
import React from "react";

const page = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;

  return (
    <React.Suspense fallback={<LoadingPage />}>
      <ViewDetailPageServer code={code} />
    </React.Suspense>
  );
};

export default page;
