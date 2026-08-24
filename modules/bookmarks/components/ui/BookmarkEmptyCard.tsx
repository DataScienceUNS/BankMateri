import { cn } from "@/modules/shadcn/utils";
import { Bookmark } from "lucide-react";
import React from "react";

const BookmarkEmptyCard = () => {
  return (
    <div className={cn("flex flex-col items-center", "w-full py-14", "border border-neutral-200 rounded-2xl")}>
      <Bookmark size={32} className="text-neutral-300 " />
      <h1 className="text-neutral-700 font-medium mt-2">No bookmarks</h1>
      <p className="text-sm text-muted-foreground">Save materials to build your reading list.</p>
    </div>
  );
};

export default BookmarkEmptyCard;
