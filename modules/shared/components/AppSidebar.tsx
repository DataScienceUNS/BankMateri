import React from 'react';
import { Sidebar , SidebarHeader, SidebarContent, SidebarGroup, SidebarFooter} from "@/modules/shadcn/ui/sidebar";

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
};

export default AppSidebar;