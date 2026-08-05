import React from 'react';
import FormUploadMaterial from "@/modules/material/components/ui/FormUploadMaterial";


const UploadMaterialPage = async () => {
    const subjects = [
        {value: "MATH101", label: "Matematika Dasar"},
        {value: "PHYS101", label: "Fisika Dasar"},
        {value: "CHEM101", label: "Kimia Dasar"},
        {value: "BIOL101", label: "Biologi Dasar"},
        {value: "INDO101", label: "Bahasa Indonesia"},
        {value: "ENGL101", label: "Bahasa Inggris"},
        {value: "HIST101", label: "Sejarah Indonesia"},
        {value: "PPKN101", label: "Pendidikan Pancasila dan Kewarganegaraan"},
        {value: "COMP101", label: "Pemrograman Dasar"},
        {value: "ECON101", label: "Ekonomi"},
        {value: "ARTS101", label: "Seni Budaya"},
        {value: "PJOK101", label: "Pendidikan Jasmani, Olahraga, dan Kesehatan"},
    ];
    
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