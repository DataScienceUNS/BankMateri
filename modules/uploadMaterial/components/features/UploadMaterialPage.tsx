import React from 'react';
import FormUploadMaterial from "@/modules/uploadMaterial/components/ui/FormUploadMaterial";
import ErrorPage from "@/modules/shared/components/featured/ErrorPage";
import {getFormSelectionData} from "@/modules/uploadMaterial/actions/getFormSelectionData";


const UploadMaterialPage = async () => {
    const payloadSelector = await getFormSelectionData()
    if (!payloadSelector.success) return (
        <ErrorPage/>
    )

    return (
        <div className="mt-12">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold">Upload Material</h1>
                    <h3 className="text-neutral-500">Share a link — no files are stored, only the external URL.</h3>
                </div>
            </header>
            <main className="mt-6">
                <FormUploadMaterial categoryLists={payloadSelector.data.MaterialCategoryLists}
                                    availableAcademicYears={payloadSelector.data.AvailableAcademicYears}
                                    subjectAvailable={payloadSelector.data.SubjectAvailable}
                                    supportedCloudStorage={payloadSelector.data.SupportedCloudStorage}/>
            </main>
        </div>
    );
};

export default UploadMaterialPage;