import React from "react";

interface MaterialDetailPageClientProps {
  academic_year: string;
  category: string;
  content_url: string;
  created_at: Date;
  description: string | null;
  id: string;
  meeting_number: number | null;
  source: string;
  subject: {
    code: string;
    name: string;
  };
  title: string;
  updated_at: Date;
  uploader: {
    full_name: string;
    profile_picture: string | null;
  };
}

const MaterialDetailPageClient = async ({ materialPayload }: { materialPayload: MaterialDetailPageClientProps }) => {
  return (
    <div>
      <h1>{materialPayload?.title}</h1>
      <p>{materialPayload?.description}</p>
    </div>
  );
};

export default MaterialDetailPageClient;
