import { InterFont } from "@/providers/fonts/Font.provider";
import { toast } from "sonner";

export const errorToast = (title: string, description: string) => {
  return toast.error(title, {
    description: description,
    position: "bottom-right",
    duration: 6000,
    classNames: {
      toast: `bg-red-100! border! border-red-200! gap-2! ${InterFont.className}`,
      title: "text-red-800! font-semibold!",
      description: "text-red-700!",
      icon: "text-red-800!",
    },
  });
};
