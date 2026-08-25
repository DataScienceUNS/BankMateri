"use client";
import { Material_Type } from "@/app/generated/prisma";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/modules/shadcn/ui/input-group";
import { Bookmark, Calendar, Search } from "lucide-react";
import React from "react";
import BookmarkEmptyCard from "../ui/BookmarkEmptyCard";
import MaterialCard from "@/modules/shared/components/ui/cards/MaterialCard";
import { formatDistanceToNow } from "date-fns";

type BookmarkPageClientProps = {
  bookmarks: {
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
    saved_at: Date;
  }[];
};

const BookmarkPageClient = ({ bookmarks }: BookmarkPageClientProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const filteredBookmarks = bookmarks
    ? bookmarks.filter((bookmark) => {
        return (
          bookmark.material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          bookmark.material.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          bookmark.material.subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          bookmark.material.subject.code.toLowerCase().includes(searchQuery.toLowerCase())
        );
      })
    : [];

  return (
    <div className="mt-10">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-[30px] text-neutral-800 font-semibold">Bookmarks</h1>
          <h3 className="text-muted-foreground text-sm">You have {bookmarks.length} bookmarked resources.</h3>
        </div>
      </header>
      <main className="mt-8">
        <InputGroup className="max-w-md py-5 px-1">
          <InputGroupInput
            className="ml-1"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <div className="mt-6">
          {filteredBookmarks.length === 0 ? (
            <BookmarkEmptyCard />
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {filteredBookmarks.map((bookmark) => (
                <MaterialCard
                  key={bookmark.material.id}
                  title={bookmark.material.title}
                  description={bookmark.material.description ?? undefined}
                  category={bookmark.material.category}
                  meetingNo={bookmark.material.meeting_number ?? 0}
                  source={bookmark.material.source}
                  createdAt={bookmark.material.created_at}
                  externalUrl={bookmark.material.content_url}
                  id={bookmark.material.id}
                  subjectName={bookmark.material.subject.name}
                  subjectCode={bookmark.material.subject.code}
                  academicYear={bookmark.material.academic_year}
                  footerText={formatDistanceToNow(new Date(bookmark.saved_at), { addSuffix: true })}
                  footerIcon={Bookmark}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BookmarkPageClient;
