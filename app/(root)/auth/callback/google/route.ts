import {NextRequest, NextResponse} from "next/server";
import {GoogleCallbackParams} from "@/modules/auth/types/GoogleCallbackParams";
import {googleCallbackHandler} from "@/modules/auth/actions/googleCallbackHandler";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams

    const allParams: GoogleCallbackParams = {
        state: searchParams.get('state') || '',
        iss: searchParams.get('iss') || '',
        code: searchParams.get('code') || '',
        scope: searchParams.get('scope') || '',
        authuser: searchParams.get('authuser') || '',
        prompt: searchParams.get('prompt') || '',
    }

    const response = await googleCallbackHandler(allParams)

    if (!response.success) {
        console.log(response.error)
        return NextResponse.redirect(new URL('/login?error=oauth_failed', request.url))
    }

    return NextResponse.redirect(new URL('/', request.url))
}