"use client";
import { Badge } from "@/modules/shadcn/ui/badge";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";
import SearchAndFilter from "../ui/SearchAndFilter";
import MaterialCard from "@/modules/shared/components/ui/cards/MaterialCard";

type SubjectDetailPageClientProps = {
  detail: {
    code: string;
    hex_color: string;
    materials: {
      category: string;
      content_url: string;
      created_at: Date;
      description: string | null;
      id: string;
      meeting_number: number | null;
      source: string;
      title: string;
      academic_year: string;
      uploader: {
        full_name: string;
      };
    }[];
    name: string;
    term: number;
  } | null;
};

const SubjectDetailPageClient = ({ detail }: SubjectDetailPageClientProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("");

  const filteredMaterials = React.useMemo(() => {
    if (!detail?.materials) return [];

    return detail.materials.filter((material) => {
      const matchesSearch =
        material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (material.description || "").toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory ? material.category === selectedCategory : true;
      const matchesYear = selectedYear ? material.academic_year === selectedYear : true;
      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [detail?.materials, searchQuery, selectedCategory, selectedYear]);

  return (
    <div className="mt-8">
      <Link
        href="/subjects"
        className="text-neutral-600 hover:text-neutral-900 text-sm cursor-pointer p-0 flex items-center gap-2"
      >
        <ArrowLeft size={16} /> All Subjects
      </Link>

      <header className="flex items-center gap-4 p-6 border border-neutral-200 rounded-xl mt-5">
        <div style={{ background: `#${detail?.hex_color}` }} className="p-4 rounded-xl">
          <BookOpen className="text-white" />
        </div>
        <div className="space-y-1.5">
          <h1 className="font-semibold text-2xl">{detail?.name}</h1>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{detail?.code}</Badge>
            <span className="text-neutral-500 text-sm">
              Semester {detail?.term} · {detail?.materials.length} Materials
            </span>
          </div>
        </div>
      </header>

      <main className="mt-8">
        <SearchAndFilter
          search={searchQuery}
          onSearchChange={setSearchQuery}
          category={selectedCategory}
          onCategoryChange={setSelectedCategory}
          year={selectedYear}
          onYearChange={setSelectedYear}
        />
        <div className="mt-6 grid grid-cols-3 gap-4">
          {filteredMaterials.map((material) => (
            <MaterialCard
              key={material.id}
              id={material.id}
              title={material.title}
              subjectCode={detail?.code || ""}
              subjectName={detail?.name || ""}
              description={material.description || ""}
              category={material.category}
              meetingNo={material.meeting_number || 0}
              source={material.source}
              createdAt={material.created_at}
              externalUrl={material.content_url}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SubjectDetailPageClient;
