"use client"
import React from 'react';
import LoginCard from "@/modules/auth/components/ui/LoginCard";
import {cn} from "@heroui/styles";

const LoginPage = () => {
    return (
        <div className={cn('bg-neutral-100', 'h-screen w-screen px-58', 'flex items-center')}>
            <LoginCard/>
        </div>
    );
};

export default LoginPage;