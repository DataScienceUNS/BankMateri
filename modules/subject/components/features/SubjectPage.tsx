import React from 'react';
import SubjectCard from "@/modules/shared/components/ui/SubjectCard";
import {getAllSubject} from "@/modules/subject/actions/getAllSubject";
import {unwrap} from "@/utils/actions/unwrap-action";

const SubjectPage = async () => {
    const response = unwrap(await getAllSubject())

    return (
        <div className="mt-12">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold">Subjects</h1>
                    <h3 className="text-neutral-500">Every course in the resource center</h3>
                </div>
            </header>
            <main className="mt-6 grid grid-cols-3 gap-4">
                {response.map((subject, index) => (
                    <SubjectCard name={subject.name} code={subject.code} link={subject.code} hex_color={`#${subject.hex_color}`}
                                 term={subject.term} material_count={subject._count.materials} key={index}/>
                ))}
            </main>
        </div>
    );
};

export default SubjectPage;