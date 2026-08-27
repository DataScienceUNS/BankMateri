import LoadingPage from "@/modules/shared/components/featured/LoadingPage";
import MaterialDetailPageServer from "@/modules/subjects/materialDeail/components/MaterialDetailPage.server";
import React from "react";

const page = async ({ params }: { params: Promise<{ subjectCode: string; materialId: string }> }) => {
  const { materialId } = await params;

  return (
    <React.Suspense fallback={<LoadingPage />}>
      <MaterialDetailPageServer materialId={materialId} />
    </React.Suspense>
  );
};

export default page;
