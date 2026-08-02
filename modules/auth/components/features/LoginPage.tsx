"use client";

import React from 'react';
import Image from 'next/image';
import LoginCard from "@/modules/auth/components/ui/LoginCard";
import { cn } from "@/modules/shadcn/utils";

const LoginPage = () => {
    return (
        <div className={cn('h-screen w-screen bg-neutral-50 flex overflow-hidden')}>
            {/* Left Column: Campus Image Hero */}
            <div className={cn('hidden relative overflow-hidden md:block md:basis-1/2 lg:basis-7/12 xl:basis-3/5')}>
                <Image 
                    src="/image/fatisda.webp"
                    alt="FATISDA UNS Campus Banner"
                    fill
                    sizes="(max-width: 768px) 0vw, 60vw"
                    priority
                    className={cn('object-cover object-center transition-transform duration-700 hover:scale-105')}
                />
                
                {/* Gradient Overlay */}
                <div className={cn('absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10')} />

                {/* Hero Overlay Branding */}
                <div className={cn('absolute bottom-12 left-12 right-12 text-white flex flex-col gap-2 max-w-lg')}>
                    <span className={cn('text-xs font-semibold tracking-wider uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full w-fit border border-amber-400/20 backdrop-blur-sm')}>
                        Fatisda Student Hub
                    </span>
                    <h2 className={cn('text-3xl font-extrabold tracking-tight leading-tight')}>
                        Elevate your learning experience at UNS.
                    </h2>
                    <p className={cn('text-sm text-neutral-300 leading-relaxed font-normal')}>
                        Access verified lecture notes, exam prep materials, and collaborative resources shared by fellow students.
                    </p>
                </div>
            </div>

            {/* Right Column: Form Container (Expanded width so original LoginCard never wraps or scrolls) */}
            <div className={cn(
                'basis-full md:basis-1/2 lg:basis-5/12 xl:basis-2/5',
                'h-full overflow-y-auto flex items-center justify-center',
                'p-6 sm:p-8 bg-white sm:bg-neutral-50/50'
            )}>
                <LoginCard className={cn('my-auto shadow-xl shadow-neutral-200/40 border-neutral-200/80')} />
            </div>
        </div>
    );
};

export default LoginPage;