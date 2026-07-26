"use server"

import * as arctic from "arctic";
import {createAction} from "@/utils/actions/create-action";
import {googleProvider} from "@/modules/auth/providers/google";
import {redis} from "@/utils/databases/redis";

export const googleRequestUrl = createAction(
    async () => {
        const google = googleProvider(`${process.env.APP_URL}${process.env.GOOGLE_CALLBACK_URL}`)
        const state = arctic.generateState();
        const codeVerifier = arctic.generateCodeVerifier();
        const scopes = ["openid", "email", "profile"];
        const url = google.createAuthorizationURL(state, codeVerifier, scopes);

        await redis.setex(`${process.env.APP_NAME}:pkce:${state}`, 300, codeVerifier)
        return {
            authorizeUrl: String(url),
        }
    }
)