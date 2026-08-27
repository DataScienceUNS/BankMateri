import React from "react";
import SubjectCard from "@/modules/shared/components/ui/cards/SubjectCard";
import { getAllSubject } from "@/modules/subjects/overviewAll/actions/getAllSubject";
import { unwrap } from "@/utils/actions/unwrap-action";
import HeaderPage from "@/modules/shared/components/typography/HeaderPage";

const SubjectPage = async () => {
  const response = unwrap(await getAllSubject());

  return (
    <div>
      <HeaderPage title="Subjects" subtitle="Every course in the resource center" />
      <main className="mt-6 grid grid-cols-3 gap-4">
        {response.map((subject, index) => (
          <SubjectCard
            name={subject.name}
            code={subject.code}
            link={subject.code}
            hex_color={`#${subject.hex_color}`}
            term={subject.term}
            material_count={subject._count.materials}
            key={index}
          />
        ))}
      </main>
    </div>
  );
};

export default SubjectPage;
