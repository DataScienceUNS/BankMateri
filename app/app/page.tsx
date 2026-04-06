"use client";
import { authClient, useSession } from "@/lib/auth/client";
import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
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
      
      <div className="flex-1 p-4 space-y-6 pb-20">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 text-center">
          <div>
            <h1><b>Quick Access</b></h1>
          </div>
          <div >
            Items
          </div>

        </div>


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
        <div className="ml-2 text-center">
          <Icon className="mx-auto" icon="solar:home-2-broken" width="24" height="24"/>
          Home
        </div>
        <div>
          <Icon className="mx-auto" icon="solar:book-bookmark-outline" width="24" height="24"/>
          Materi
        </div>
        <div className="bg-pink-200 mx-2">
          <Icon className="mx-auto" icon="solar:magnifer-linear" width="24" height="24"/>
          Search
        </div>
        <div>
          <Icon className="mx-auto" icon="solar:file-text-outline" width="24" height="24" />
          Dokumen
        </div>
        <div className="mr-2">
          <Icon className="mx-auto" icon="solar:user-circle-linear" width="24" height="24"/>
          Profile
        </div>
      </div>
    </>
  );
}