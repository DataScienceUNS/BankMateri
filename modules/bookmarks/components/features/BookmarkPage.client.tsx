"use client";
import { Material_Type } from "@/app/generated/prisma";
import React from "react";

type BookmarkPageClientProps = {
  bookmarks: {
    material: {
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
    saved_at: Date;
  }[];
};

const BookmarkPageClient = ({ bookmarks }: BookmarkPageClientProps) => {
  return <div>{JSON.stringify(bookmarks)}</div>;
};

export default BookmarkPageClient;
