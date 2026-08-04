import React from 'react';
import {Spinner} from "@/modules/shadcn/ui/spinner";
import {cn} from "@/modules/shadcn/utils";

const LoadingPage = () => {
    return (
        <div className={cn("flex flex-col items-center justify-center gap-4", "h-full -mt-20", "text-neutral-600")}>
            <Spinner className="size-8"/>
            <h1>Getting your request, please wait...</h1>
        </div>
    );
};

export default LoadingPage;