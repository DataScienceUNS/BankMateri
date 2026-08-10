"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/modules/shadcn/ui/badge";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";
import SearchAndFilter from "../ui/SearchAndFilter";

type ViewDetailPageClientProps = {
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
      uploader: {
        full_name: string;
      };
    }[];
    name: string;
    term: number;
  } | null;
};

const ViewDetailPageClient = ({ detail }: ViewDetailPageClientProps) => {
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
        <SearchAndFilter />
      </main>
    </div>
  );
};

export default ViewDetailPageClient;
