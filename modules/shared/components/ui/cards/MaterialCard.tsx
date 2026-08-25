import { MaterialCategoryLists } from "@/config/MaterialCategoryLists";
import { SupportedCloudStorage } from "@/config/SupportedCloudStorage";
import { Badge } from "@/modules/shadcn/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/modules/shadcn/ui/card";
import { Calendar, ExternalLink, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Link from "next/link";

/**
 * To-Do: Add bookmark functionality
 */

interface MaterialCardProps {
  id: string;
  title: string;
  subjectName: string;
  subjectCode: string;
  description?: string;
  category: string;
  meetingNo: number;
  source: string;
  academicYear: string;
  createdAt: Date;
  externalUrl: string;
  footerIcon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  footerText?: string;
  // isBookmarked: boolean;
  // handleBookmarkClick: (materialId: string) => void | Promise<void>;
}

const MaterialCard = ({
  id,
  title,
  subjectName,
  subjectCode,
  description,
  category,
  meetingNo,
  source,
  academicYear,
  externalUrl,
  footerIcon: FooterIcon,
  footerText,
  // isBookmarked,
  // handleBookmarkClick,
}: MaterialCardProps) => {
  return (
    <Card className="w-full max-w-94 py-5 gap-0">
      {/* Header */}
      <CardHeader className="py-0 px-5 flex items-start justify-between gap-4 flex-1">
        <div className="space-y-1.5">
          <Link
            href={`/subjects/${subjectCode}/materials/${id}`}
            className="text-base font-semibold text-gray-900 line-clamp-2 hover:underline cursor-pointer"
          >
            {title}
          </Link>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <Link href={`/subjects/${subjectCode}`} className="text-xs text-gray-500 hover:underline cursor-pointer">
              {subjectName}
            </Link>
          </div>
        </div>
        {/* {user && (
          <Bookmark
            onClick={() => handleBookmarkClick(id)}
            className={cn(
              "mt-2 h-5 w-5 shrink-0 text-gray-400",
              "cursor-pointer",
              isBookmarked && "text-amber-400 fill-amber-400",
            )}
          />
        )} */}
      </CardHeader>

      <CardContent className="p-0 px-5">
        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500">{description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="secondary">{MaterialCategoryLists.find((c) => c.value === category)?.label}</Badge>
          <Badge variant="secondary">Meeting {meetingNo}</Badge>
          <Badge variant="secondary">{SupportedCloudStorage.find((s) => s.value === source)?.label}</Badge>
          <Badge variant="secondary">{academicYear}</Badge>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="mt-4 mx-0 py-4 px-5">
        <div className="w-full flex items-center justify-between border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            {FooterIcon && <FooterIcon className="h-4 w-4" />}
            <span className="text-xs">{footerText}</span>
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
