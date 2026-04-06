"use client";
import { authClient, useSession } from "@/lib/auth/client";
import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <>
      {/* 1. SCROLLABLE CONTENT AREA
        flex-1: Pushes the bottom bar to the end of the page if content is short.
        pb-20: Adds padding at the bottom so the sticky nav doesn't cover your last item!
      */}
      <div className="flex-1 p-4 space-y-6 pb-20">
        
        <Input type="search" placeholder="Search..." className="w-full" />

        {/* Generate lots of content to test the scrolling! */}
        {Array.from({ length: 15 }).map((_, i) => (
           <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100">
             Scrollable Content Block {i + 1}
           </div>
        ))}
        
      </div>

      {/* 2. STICKY BOTTOM NAVIGATION BAR
        sticky bottom-0: Sticks to the bottom of the screen.
        z-50: Ensures it floats ABOVE the scrolling content.
        mt-auto: Pushes it to the bottom even if the page content is very short.
      */}
      <div className="sticky bottom-0 mt-auto w-full h-16 bg-blue-500 flex items-center justify-between text-white z-50 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)]">
        <div>
          Home
        </div>
        <div>
          Materi
        </div>
        <div>
          Search
        </div>
        <div>
          Dokumen
        </div>
        <div>
          Profile
        </div>
      </div>
    </>
  );
}