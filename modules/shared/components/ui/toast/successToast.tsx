import { InterFont } from "@/providers/fonts/Font.provider";
import { toast } from "sonner";

export const successToast = (title: string, description?: string) => {
  return toast.success(title, {
    description: description,
    position: "bottom-right",
    duration: 6000,
    classNames: {
      toast: `bg-green-100! border! border-green-200! gap-2! ${InterFont.className}`,
      title: "text-green-800! font-semibold!",
      description: "text-green-700!",
      icon: "text-green-800!",
    },
  });
};
