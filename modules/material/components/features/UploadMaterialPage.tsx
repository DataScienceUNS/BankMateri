import React from 'react';
import FormUploadMaterial from "@/modules/material/components/ui/FormUploadMaterial";


const UploadMaterialPage = () => {
    return (
        <div className="mt-12">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold">Upload Material</h1>
                    <h3 className="text-neutral-500">Share a link — no files are stored, only the external URL.</h3>
                </div>
            </header>
            <main className="mt-6">
                <FormUploadMaterial/>
            </main>
        </div>
    );
};

export default UploadMaterialPage;