"use client"

import React from 'react';
import {Bookmark, FilePen, History, Home, Library, LifeBuoy, LucideProps, Settings, ShieldCog, Upload, Users} from "lucide-react";
import {usePathname} from "next/navigation";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenu,
    SidebarGroupContent
    , SidebarFooter
} from "@/modules/shadcn/ui/sidebar";
import {useUser} from "@/providers/auth/auth-provider";
import {Access_Type} from "@/app/generated/prisma";
import Link from "next/link";

interface SidebarItem {
    title: string
    url: string
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    permitted?: Access_Type[]
}

const MainSidebar = () => {
    const user = useUser()

    const pathname = usePathname()
    const contentItems: SidebarItem[] = [
        {title: "Home", url: "/", icon: Home},
        {title: "Bookmarks", url: "/my/bookmarks", icon: Bookmark, permitted: ["guest", "verified", "supervisor", "admin"]},
        {title: "History", url: "/my/histories", icon: History, permitted: ["guest", "verified", "supervisor", "admin"]},
        {title: "Subjects", url: "/my/subjects", icon: Library},
        {title: "Upload Material", url: "/upload/material", icon: Upload, permitted: ["verified", "supervisor", "admin"]},
        {title: "Community", url: "/community", icon: Users, permitted: ["verified", "supervisor", "admin"]},
    ]
    const footerItems: SidebarItem[] = [
        {title: "Control Panel", url: "/admin", icon: ShieldCog, permitted: ["admin"]},
        {title: "Moderation", url: "/moderation", icon: FilePen, permitted: ["supervisor", "admin"]},
        {title: "Settings", url: "/settings", icon: Settings, permitted: ["guest", "verified", "supervisor", "admin"]},
        {title: "Support", url: "/support", icon: LifeBuoy}
    ]

    return (
        <Sidebar className="border-r border-gray-200 static h-full w-60">
            <SidebarContent className="bg-white py-2 px-1">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            {contentItems.map((item) => {
                                if (!item.permitted || item.permitted.includes(user?.user.access_type as Access_Type)) return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={pathname === item.url}
                                            className={`
                                          flex items-center gap-3 px-3 py-2 h-9 text-gray-600 rounded-lg transition-colors
                                          hover:bg-gray-100 hover:text-gray-900
                                          data-[active=true]:bg-gray-100 data-[active=true]:font-medium
                                        `}
                                        >
                                            <Link href={item.url}>
                                                <item.icon className="stroke-2 h-4.5! w-4.5!"/>
                                                <span className="text-[15px]">{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="bg-white py-2 px-1">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {footerItems.map((item) => {
                                if (!item.permitted || item.permitted.includes(user?.user.access_type as Access_Type)) return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={pathname === item.url}
                                            className={`
                                          flex items-center gap-3 px-3 py-2 h-9 text-gray-600 rounded-lg transition-colors
                                          hover:bg-gray-100 hover:text-gray-900
                                          data-[active=true]:bg-gray-100 data-[active=true]:font-medium
                                        `}
                                        >
                                            <Link href={item.url}>
                                                <item.icon className="stroke-2 h-4.5! w-4.5!"/>
                                                <span className="text-[15px]">{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    );
};

export default MainSidebar;