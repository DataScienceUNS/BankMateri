"use client"

import React from 'react';
import {Bookmark, History, Home, Library, LucideProps, Upload, Users} from "lucide-react";
import {usePathname} from "next/navigation";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenu,
    SidebarGroupContent
} from "@/modules/shadcn/ui/sidebar";
import {Access_Type} from "@/app/generated/prisma";
import {useUser} from "@/providers/auth/auth-provider";

const AppSidebar = () => {
    const user = useUser()

    const pathname = usePathname()
    const items: {
        title: string
        url: string
        icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
        permitted?: Access_Type[]
    }[] = [
        {title: "Home", url: "/", icon: Home},
        {title: "Bookmarks", url: "/my/bookmarks", icon: Bookmark, permitted: ["guest", "verified", "supervisor", "admin"]},
        {title: "History", url: "/my/histories", icon: History, permitted: ["guest", "verified", "supervisor", "admin"]},
        {title: "Subjects", url: "/my/subjects", icon: Library},
        {title: "Upload Material", url: "/upload/material", icon: Upload, permitted: ["verified", "supervisor", "admin"]},
        {title: "Community", url: "/community", icon: Users, permitted: ["verified", "supervisor", "admin"]},
    ]

    return (
        <Sidebar className="border-r border-gray-200 static h-full w-full">
            <SidebarContent className="bg-white py-2 px-1">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            {items.map((item) => {
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
                                            <a href={item.url}>
                                                <item.icon className="stroke-2 h-4.5! w-4.5!"/>
                                                <span className="text-[15px]">{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AppSidebar;