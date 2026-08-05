import React from 'react';
import UploadMaterialPage from "@/modules/material/components/features/UploadMaterialPage";
import LoadingPage from "@/modules/shared/components/featured/LoadingPage";

const page = () => {
    return (
        <React.Suspense fallback={<LoadingPage/>}>
            <UploadMaterialPage/>
        </React.Suspense>
    );
};

export default page;