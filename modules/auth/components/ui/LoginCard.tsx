"use client"
import React from 'react';
import Image from "next/image";
import WarningFillIcon from '@iconify-react/ph/warning-fill';
import GoogleIcon from '@iconify-react/selfhst/google';
import {Button, Spinner} from "@heroui/react";
import {cn} from "@heroui/styles";

const LoginCard = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const onLoginAction = () => {
        setIsLoading(true)
        console.log("Login Action")
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }

    return (
        <div className={cn('bg-white border border-neutral-200 rounded-2xl', 'w-124 py-8 px-10', 'flex flex-col gap-20')}>
            <div>
                <Image src="/image/long_logo.png" alt="DSRC Logo" height={0} width={125}/>
                <div className="flex flex-col gap-1 mt-8 mb-5">
                    <h1 className="text-neutral-800 text-xl">Welcome, Future Top Scorer</h1>
                    <p className="text-neutral-700 leading-5">Sign in to unlock your campus materials, save your favorites, and upload your own resources.</p>
                </div>
                <Button className="bg-black w-full py-6 flex gap-4" onPress={onLoginAction} isPending={isLoading}>
                    { !isLoading ? <GoogleIcon width="20" /> : <Spinner color="current"/>}
                    Continue with Google
                </Button>
                <div className={cn('bg-yellow-50 border border-yellow-500 rounded-xl', 'text-yellow-900 text-sm font-normal', 'mt-5 py-3 px-5', 'flex gap-2 items-center')}>
                    <WarningFillIcon width="80"/>
                    <p>Using your <span className="font-semibold">UNS SSO</span> account helps us verify your student account faster, so you can unlock additional permissions like uploading materials, contributing resources, and other community features.</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className={"text-xs text-neutral-600"}>Powered by the awesome sponsors below. They help keep this project alive, growing, and online. Huge thanks for making this possible.</p>
                <Image src={"/image/sponsor_example.png"} alt="example sponsor" height={0} width={1200}/>
            </div>
        </div>
    );
};

export default LoginCard;