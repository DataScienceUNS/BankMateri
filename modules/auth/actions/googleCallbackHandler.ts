"use server"

import {createAction} from "@/utils/actions/create-action";
import {GoogleCallbackParams} from "@/modules/shared/types/GoogleCallbackParams";
import {redis} from "@/utils/databases/redis";
import {ValidationError} from "@/utils/errors/app-error";
import {googleProvider} from "@/modules/auth/providers/google";
import {GoogleAccountInformation} from "@/modules/shared/types/GoogleAccountInformation";

export const googleCallbackHandler = createAction(
    async (params: GoogleCallbackParams) => {
        const state = params.state
        const codeVerifier = await redis.get(`${process.env.APP_NAME}:pkce:${state}`)

        if (!codeVerifier) throw new ValidationError("The token has expired because the time limit has been exceeded.")
        await redis.del(`${process.env.APP_NAME}:pkce:${state}`)

        const google = googleProvider(`${process.env.APP_URL}${process.env.GOOGLE_CALLBACK_URL}`)
        const tokens = await google.validateAuthorizationCode(params.code, codeVerifier)

        const accessToken = tokens.accessToken()
        const response = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })

        const userData = await response.json() as GoogleAccountInformation

        return {
            user_data: userData,
        }
    }
)