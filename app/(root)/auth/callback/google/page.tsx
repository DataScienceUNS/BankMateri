import React from 'react';
import {PageProps} from "@/modules/shared/types/PageProps";
import {GoogleCallbackParams} from "@/modules/auth/types/GoogleCallbackParams";
import {googleCallbackHandler} from "@/modules/auth/actions/googleCallbackHandler";

const page = async ({searchParams}: PageProps) => {
    const resolvedParams = await searchParams;
    const allParams: GoogleCallbackParams = {
        state: resolvedParams.state as string,
        iss: resolvedParams.iss as string,
        code: resolvedParams.code as string,
        scope: resolvedParams.scope as string,
        authuser: resolvedParams.authuser as string,
        prompt: resolvedParams.prompt as string,
    }

    const response = await googleCallbackHandler(allParams)
    if (!response.success) console.log(response.error)
    console.log(response)

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
};

export default page;