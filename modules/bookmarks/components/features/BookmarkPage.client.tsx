"use client";
import { Material_Type } from "@/app/generated/prisma";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/modules/shadcn/ui/input-group";
import { Search } from "lucide-react";
import React from "react";
import BookmarkEmptyCard from "../ui/BookmarkEmptyCard";

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
          <InputGroupInput className="ml-1" placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <div className="mt-5">
          {bookmarks.length === 0 ? (
            <BookmarkEmptyCard />
          ) : (
            <ul>
              {bookmarks.map((bookmark) => (
                <li key={bookmark.material.id}>
                  <h4>{bookmark.material.title}</h4>
                  <p>{bookmark.material.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default BookmarkPageClient;
