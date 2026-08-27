'use client'
import React from 'react';
import {useUser} from "@/providers/auth/auth-provider";
import {Avatar, AvatarFallback, AvatarImage} from "@/modules/shadcn/ui/avatar";
import {Button} from "@/modules/shadcn/ui/button";
import {LogIn, LogOut} from "lucide-react";
import {useRouter} from "next/navigation";
import {Popover, PopoverTrigger, PopoverContent} from "@/modules/shadcn/ui/popover";
import {Separator} from "@/modules/shadcn/ui/separator";
import {logoutAction} from "@/modules/auth/actions/logoutAction";

const NavbarProfile = () => {
    const user = useUser()
    const router = useRouter()

    return (
        <div>
            {user?.user ? (
                <Popover>
                    <PopoverTrigger asChild>
                        <Avatar>
                            <AvatarImage src={user?.user.profile_picture} alt="Profile Picture"/>
                            <AvatarFallback>{user?.user.full_name?.match(/\b(\w)/g)?.slice(0, 2).join("").toUpperCase()}</AvatarFallback>
                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent autoFocus={false} align="end" className="w-62">
                        <div>
                            <div className="flex flex-col gap-1">
                                <span
                                    className="text-xs text-neutral-400 font-semibold">{user.user.user_type?.toUpperCase()} | {user.user.student?.nim}{user.user.lecture?.nip}</span>
                                <h1 className="truncate text-neutral-700">{user.user.full_name}</h1>
                            </div>
                            <Separator className="mt-1.5 mb-2"/>
                            <Button autoFocus={false} variant="destructive" className="w-full cursor-pointer"
                                    onClick={() => logoutAction()}>
                                <LogOut/>
                                Logout
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>
            ) : (
                <Button variant="default" onClick={() => router.push('/auth/login')} className="cursor-pointer"><LogIn/> Login</Button>
            )}
        </div>
    );
};

export default NavbarProfile;