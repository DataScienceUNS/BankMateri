import React from 'react';
import {dummyData} from "@/modules/subject/components/features/DummyData";
import SubjectCard from "@/modules/shared/components/ui/SubjectCard";

const SubjectPage = async () => {
    return (
        <div className="mt-12">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold">Subjects</h1>
                    <h3 className="text-neutral-500">Every course in the resource center</h3>
                </div>
            </header>
            <main className="mt-6 grid grid-cols-3 gap-4">
                {dummyData.map((subject, index) => (
                    <SubjectCard name={subject.name} code={subject.code} link={subject.link} hex_color={subject.hex_color}
                                 term={subject.term} material_count={subject.material_count} key={index}/>
                ))}
            </main>
        </div>
    );
};

export default SubjectPage;