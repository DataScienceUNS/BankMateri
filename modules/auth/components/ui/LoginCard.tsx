"use client";

import React from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { googleRequestUrl } from "@/modules/auth/actions/googleRequestUrl";
import { Icon } from "@/utils/styles/iconify";
import { Button } from "@/modules/shadcn/ui/button";
import { Spinner } from "@/modules/shadcn/ui/spinner";
import { cn } from "@/modules/shadcn/utils";

interface LoginCardProps {
    className?: string;
}

const LoginCard = ({ className }: LoginCardProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);

    const onLoginAction = async () => {
        setIsLoading(true);
        try {
            const response = await googleRequestUrl();
            if (response.success) {
                router.push(response.data.authorizeUrl);
            } else {
                console.log(response.error);
            }
        } catch (err) {
            console.error("Login Error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={cn(
            'w-full max-w-md bg-white border border-neutral-200 rounded-2xl',
            'py-8 px-6 sm:px-10 flex flex-col justify-between gap-8 shadow-sm',
            className
        )}>
            <div>
                {/* DSRC Logo */}
                <Image 
                    src="/image/long_logo.svg" 
                    alt="DSRC Logo" 
                    height={28} 
                    width={130} 
                    priority
                    className={cn('h-auto w-32')}
                />

                <div className={cn('flex flex-col gap-1 mt-6 mb-5')}>
                    <h1 className={cn('text-neutral-800 text-xl font-bold')}>
                        Welcome, Future Top Scorer
                    </h1>
                    <p className={cn('text-neutral-700 leading-relaxed text-sm')}>
                        Sign in to unlock your campus materials, save your favorites, and upload your own resources.
                    </p>
                </div>

                <Button 
                    className={cn(
                        'bg-black text-white w-full py-5 flex gap-4 items-center justify-center',
                        'hover:bg-neutral-800 cursor-pointer font-medium rounded-lg'
                    )} 
                    onClick={onLoginAction} 
                    disabled={isLoading}
                >
                    {!isLoading ? (
                        <Icon icon="selfhst:google" width="20" />
                    ) : (
                        <Spinner className={cn('size-5 text-white')} />
                    )}
                    <span>{isLoading ? "Connecting..." : "Continue with Google"}</span>
                </Button>

                <div className={cn(
                    'bg-yellow-50/80 border border-yellow-500/80 rounded-xl',
                    'text-yellow-900 text-xs font-normal mt-5 py-3 px-4',
                    'flex gap-2.5 items-start'
                )}>
                    <Icon icon="ph:warning-fill" className={cn('size-5 shrink-0 text-yellow-600 mt-0.5')} />
                    <p className={cn('leading-relaxed')}>
                        Using your <span className={cn('font-semibold text-yellow-950')}>UNS SSO</span> account helps us verify your student account faster, so you can unlock additional permissions like uploading materials, contributing resources, and other community features.
                    </p>
                </div>
            </div>

            {/* Sponsor Footer */}
            <div className={cn('flex flex-col gap-3 pt-6 border-t border-neutral-100')}>
                <p className={cn('text-xs text-neutral-600 leading-relaxed')}>
                    Powered by the awesome sponsors below. They help keep this project alive, growing, and online.
                </p>
                <div className={cn('relative w-full h-8')}>
                    <Image 
                        src="/image/sponsor_example.png" 
                        alt="example sponsor" 
                        fill
                        className={cn('object-contain object-left')}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginCard;