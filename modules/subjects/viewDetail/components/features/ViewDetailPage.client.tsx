"use client";
import React from "react";

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
  return <div>ViewDetailPage: {JSON.stringify(detail)}</div>;
};

export default ViewDetailPageClient;
