import React from 'react';
import Image from "next/image";
import {Search} from "lucide-react";
import AppSidebar from "@/modules/shared/components/AppSidebar";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/modules/shadcn/ui/input-group";
import {SidebarProvider} from "@/modules/shadcn/ui/sidebar";
import {Kbd} from "@/modules/shadcn/ui/kbd";
import {cn} from "@/modules/shadcn/utils";
import NavbarProfile from "@/modules/shared/components/NavbarProfile";

const layout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <SidebarProvider>
            <div
                className={cn('fixed top-0 left-0 z-50', 'w-screen h-15 px-8', 'flex items-center justify-between', 'bg-transparent border-b border-b-neutral-200')}>
                <Image src="/image/long_logo.svg" width={130} height={10} alt="DSRC Logo"/>
                <div>
                    <InputGroup
                        className={cn('w-102 h-9 border-neutral-400', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2')}>
                        <InputGroupInput placeholder="Search materials, subjects, people..."/>
                        <InputGroupAddon>
                            <Search/>
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">
                            <Kbd>Ctrl+K</Kbd>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <NavbarProfile/>
            </div>
            <div className="flex w-full mt-15">
                <AppSidebar/>
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </SidebarProvider>
    );
};

export default layout;