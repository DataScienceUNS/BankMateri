import React from 'react';
import SubjectPage from "@/modules/subject/components/features/SubjectPage";
import LoadingPage from "@/modules/shared/components/featured/LoadingPage";

const page = () => {
    return (
        <React.Suspense fallback={<LoadingPage/>}>
            <SubjectPage/>
        </React.Suspense>
    );
};

export default page;