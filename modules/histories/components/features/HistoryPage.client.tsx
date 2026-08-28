"use client";
import { Material_Type } from "@/app/generated/prisma";
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
  return <div className="wrap-anywhere">{JSON.stringify(histories)}</div>;
};

export default HistoryPageClient;
