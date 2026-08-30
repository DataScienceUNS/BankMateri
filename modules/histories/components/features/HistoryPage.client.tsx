"use client";
import { Material_Type } from "@/app/generated/prisma";
import { formatDistanceToNow } from "date-fns";
import { RotateCcwClock } from "lucide-react";
import HistoryEmptyCard from "../ui/HistoryEmptyCard";
import MaterialCard from "@/modules/shared/components/ui/cards/MaterialCard";
import HeaderPage from "@/modules/shared/components/typography/HeaderPage";
import React from "react";

type HistoryPageClientProps = {
  histories: {
    last_accessed: Date;
    material: {
      subject: {
        code: string;
        name: string;
      };
    } & {
      id: string;
      title: string;
      description: string | null;
      source: string;
      content_url: string;
      category: string;
      material_type: Material_Type;
      academic_year: string;
      visitor_count: number;
      meeting_number: number | null;
      is_copied: boolean;
      created_at: Date;
      updated_at: Date;
      deleted_at: Date | null;
      subject_id: string;
      uploader_id: string;
    };
  }[];
};

const HistoryPageClient = ({ histories }: HistoryPageClientProps) => {
  return (
    <div>
      <HeaderPage title="History" subtitle="Materials you recently opened." />
      <main className="mt-6">
        {histories.length === 0 ? (
          <HistoryEmptyCard />
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {histories.map((history) => (
              <MaterialCard
                key={history.material.id}
                title={history.material.title}
                description={history.material.description ?? undefined}
                category={history.material.category}
                meetingNo={history.material.meeting_number ?? 0}
                source={history.material.source}
                createdAt={history.material.created_at}
                externalUrl={history.material.content_url}
                id={history.material.id}
                subjectName={history.material.subject.name}
                subjectCode={history.material.subject.code}
                academicYear={history.material.academic_year}
                footerText={formatDistanceToNow(new Date(history.last_accessed), { addSuffix: true })}
                footerIcon={RotateCcwClock}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default HistoryPageClient;
