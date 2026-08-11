import { Badge } from "@/modules/shadcn/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/modules/shadcn/ui/card";
import { Bookmark, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface MaterialCardProps {
  title: string;
  subject: string;
  description: string;
  category: string;
  meetingNo: number;
  source: string;
  createdAt: Date;
  externalUrl: string;
}

const MaterialCard = ({
  title,
  subject,
  description,
  category,
  meetingNo,
  source,
  createdAt,
  externalUrl,
}: MaterialCardProps) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card className="w-full max-w-sm py-5 gap-0">
      {/* Header */}
      <CardHeader className="py-0 px-5 flex items-center justify-between">
        <div className="space-y-1.5">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-xs text-gray-500">{subject}</span>
          </div>
        </div>
        <Bookmark className="-mt-4 h-5 w-5 shrink-0 text-gray-400" />
      </CardHeader>

      <CardContent className="p-0 px-5">
        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500">{description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="secondary">{category}</Badge>
          <Badge variant="secondary">#Meeting {meetingNo}</Badge>
          <Badge variant="secondary">{source}</Badge>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="mt-4 mx-0 py-4 px-5">
        <div className="w-full flex items-center justify-between border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span className="text-xs">{formattedDate}</span>
          </div>
          <Link
            href={externalUrl}
            target="_blank"
            className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline"
          >
            Open
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MaterialCard;
