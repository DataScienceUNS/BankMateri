import React from "react";
import Image from "next/image";
import { SidebarProvider } from "@/modules/shadcn/ui/sidebar";
import { cn } from "@/modules/shadcn/utils";
import NavbarProfile from "@/modules/shared/components/NavbarProfile";
import NavbarSearch from "@/modules/shared/components/NavbarSearch";
import AdminSidebar from "@/app/(admin)/AdminSidebar";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <div
        className={cn(
          "fixed top-0 left-0 z-50",
          "w-screen h-15 px-8",
          "flex items-center justify-between",
          "bg-transparent border-b border-b-neutral-200",
        )}
      >
        <Image src="/image/long_logo.svg" width={130} height={10} alt="DSRC Logo" />
        <div>
          <NavbarSearch />
        </div>
        <NavbarProfile />
      </div>
      <div className="flex h-screen w-full pt-15 overflow-hidden">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto flex justify-center">
          <div className="w-full max-w-290">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default layout;
