'use client'
import React from 'react';
import {useUser} from "@/providers/auth/auth-provider";
import {Avatar, AvatarFallback, AvatarImage} from "@/modules/shadcn/ui/avatar";
import {Button} from "@/modules/shadcn/ui/button";
import {LogIn} from "lucide-react";
import {useRouter} from "next/navigation";

const NavbarProfile = () => {
    const user = useUser()
    const router = useRouter()

    return (
        <div>
            {user?.user ? (
            <Avatar>
                <AvatarImage src={user?.user.profile_picture} alt="Profile Picture" />
                <AvatarFallback>{user?.user.full_name?.match(/\b(\w)/g)?.slice(0, 2).join("").toUpperCase()}</AvatarFallback>
            </Avatar>
            ) : (
                <Button variant="default" onClick={() => router.push('/auth/login')} className="cursor-pointer"><LogIn/> Login</Button>
            )}
        </div>
    );
};

export default NavbarProfile;