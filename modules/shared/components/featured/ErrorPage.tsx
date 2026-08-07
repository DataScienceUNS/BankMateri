import React from 'react';
import Image from "next/image";

const ErrorPage = ({
                       title = "Well, this is embarrassing...",
                       description = 'Our server decided to take an unscheduled nap. We\'re waking it up right now. Hang tight and try again in a bit!'
                   }: { title?: string, description?: string }) => {
    return (
        <div className="flex mt-32">
            <Image src="/assets/server_error.svg" width={400} height={0} alt="Server Error"/>
            <div className="flex flex-col justify-center gap-4 -mt-12">
                <h1 className="text-red-600 text-3xl font-semibold">{title}</h1>
                <p className="text-lg text-neutral-700">{description}</p>
            </div>
        </div>
    );
};

export default ErrorPage;