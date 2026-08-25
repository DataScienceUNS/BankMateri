import React from "react";
import FormUploadMaterial from "@/modules/uploadMaterial/components/ui/FormUploadMaterial";
import ErrorPage from "@/modules/shared/components/featured/ErrorPage";
import { getFormSelectionData } from "@/modules/uploadMaterial/actions/getFormSelectionData";
import HeaderPage from "@/modules/shared/components/typography/HeaderPage";

const UploadMaterialPage = async () => {
  const payloadSelector = await getFormSelectionData();
  if (!payloadSelector.success) return <ErrorPage />;

  return (
    <div>
      <HeaderPage title="Upload Material" subtitle="Share a link — no files are stored, only the external URL." />
      <main>
        <FormUploadMaterial
          categoryLists={payloadSelector.data.MaterialCategoryLists}
          availableAcademicYears={payloadSelector.data.AvailableAcademicYears}
          subjectAvailable={payloadSelector.data.SubjectAvailable}
          supportedCloudStorage={payloadSelector.data.SupportedCloudStorage}
        />
      </main>
    </div>
  );
};

export default UploadMaterialPage;
