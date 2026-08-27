"use client";
import { MaterialCategoryLists } from "@/config/MaterialCategoryLists";
import { SupportedCloudStorage } from "@/config/SupportedCloudStorage";
import { Button } from "@/modules/shadcn/ui/button";
import { Separator } from "@/modules/shadcn/ui/separator";
import { cn } from "@/modules/shadcn/utils";
import { ArrowLeft, Bookmark, ExternalLink, Flag } from "lucide-react";
import Link from "next/link";
import React from "react";
import { addMaterialToBookmark } from "../actions/addMaterialToBookmark";
import { removeMaterialFromBookmark } from "../actions/removeMaterialFromBookmark";
import { useUser } from "@/providers/auth/auth-provider";
import { Dialog, DialogTrigger } from "@/modules/shadcn/ui/dialog";
import ReportDialog from "./ui/ReportDialog";

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
    hex_color: string;
  };
  title: string;
  updated_at: Date;
  uploader: {
    full_name: string;
    profile_picture: string | null;
  };
  bookmarked_by: {
    user_id: string;
    material_id: string;
  }[];
}

const MaterialDetailPageClient = ({ materialPayload }: { materialPayload: MaterialDetailPageClientProps }) => {
  const user = useUser();

  const [dialogReportOpen, setDialogReportOpen] = React.useState(false);
  const [bookmarkStatus, setBookmarkStatus] = React.useState<boolean>(materialPayload.bookmarked_by?.length > 0);
  const handleBookmarkClick = async () => {
    if (bookmarkStatus) {
      await removeMaterialFromBookmark({ materialId: materialPayload.id });
      setBookmarkStatus(false);
    } else {
      await addMaterialToBookmark({ materialId: materialPayload.id });
      setBookmarkStatus(true);
    }
  };

  return (
    <div className="mt-8">
      {/* Back Button */}
      <Link
        href={`/subjects/${materialPayload.subject.code}`}
        className="text-neutral-600 hover:text-neutral-900 text-sm cursor-pointer p-0 flex items-center gap-2"
      >
        <ArrowLeft size={16} /> {materialPayload.subject.name}
      </Link>

      <div className="mt-6 flex gap-8">
        {/* Material Details */}
        <div className="flex-1">
          {/* Material Header */}
          <div
            className={cn(
              "text-xs font-normal bg-muted py-1 px-2 w-fit rounded-md",
              "text-primary bg-primary/6 border border-primary/12",
            )}
          >
            {MaterialCategoryLists.find((cat) => cat.value === materialPayload.category)?.label ||
              materialPayload.category}
          </div>
          <div className="mt-2 space-y-4">
            <h1 className="text-[26px] font-semibold text-neutral-800">{materialPayload.title}</h1>
            <p className="text-muted-foreground">{materialPayload.description}</p>
          </div>

          {/* Material Metadata */}
          <div className="mt-10 border rounded-xl">
            <div className="flex justify-between text-sm py-3 px-6">
              <span className="text-muted-foreground">Subject</span>
              <span className="font-medium">{materialPayload.subject.name}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm py-3 px-6">
              <span className="text-muted-foreground">Category</span>
              <span className="font-medium">
                {MaterialCategoryLists.find((cat) => cat.value === materialPayload.category)?.label ||
                  materialPayload.category}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm py-3 px-6">
              <span className="text-muted-foreground">Meeting Number</span>
              <span className="font-medium">Meeting {materialPayload.meeting_number}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm py-3 px-6">
              <span className="text-muted-foreground">Academic Year</span>
              <span className="font-medium">{materialPayload.academic_year}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm py-3 px-6">
              <span className="text-muted-foreground">Uploader</span>
              <span className="font-medium">{materialPayload.uploader.full_name}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm py-3 px-6">
              <span className="text-muted-foreground">Source</span>
              <span className="font-medium">
                {SupportedCloudStorage.find((s) => s.value === materialPayload.source)?.label || materialPayload.source}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm py-3 px-6">
              <span className="text-muted-foreground">Upload Date</span>
              <span className="font-medium">{materialPayload.created_at.toLocaleDateString()}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm py-3 px-6">
              <span className="text-muted-foreground">Latest Update </span>
              <span className="font-medium">
                {materialPayload.updated_at ? materialPayload.updated_at.toLocaleDateString() : "N/A"}
              </span>
            </div>
          </div>
        </div>

        {/* Material Actions */}
        <div className="w-80 h-fit flex flex-col justify-between border rounded-xl p-4">
          <Link href={materialPayload.content_url} target="_blank" rel="noopener noreferrer">
            <Button className="py-5 cursor-pointer w-full">
              Open Material <ExternalLink size={16} />
            </Button>
          </Link>
          <span className="text-xs text-center text-muted-foreground mt-2">
            Redirects to{" "}
            {SupportedCloudStorage.find((s) => s.value === materialPayload.source)?.label || materialPayload.source}
          </span>
          {user?.user && (
            <div className="flex w-full gap-2 mt-4">
              <Button
                className="flex-1 py-5 text-neutral-800 cursor-pointer"
                variant="outline"
                onClick={handleBookmarkClick}
              >
                <Bookmark className={bookmarkStatus ? "stroke-amber-500 fill-amber-500" : ""} />
                {bookmarkStatus ? "Saved" : "Save"}
              </Button>
              <Dialog open={dialogReportOpen} onOpenChange={setDialogReportOpen}>
                <DialogTrigger asChild>
                  <Button className="flex-1 py-5 text-neutral-800 cursor-pointer" variant="outline">
                    <Flag />
                    Report
                  </Button>
                </DialogTrigger>
                <ReportDialog materialId={materialPayload.id} setDialogReportOpen={setDialogReportOpen} />
              </Dialog>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaterialDetailPageClient;
