import React from 'react';
import LoadingPage from "@/modules/shared/components/featured/LoadingPage";
import SubjectPage from "@/modules/subjects/overviewAll/components/features/SubjectPage";

const page = () => {
    return (
        <React.Suspense fallback={<LoadingPage/>}>
            <SubjectPage/>
        </React.Suspense>
    );
};

export default page;