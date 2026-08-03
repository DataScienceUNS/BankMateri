"use server"

import {createAction} from "@/utils/actions/create-action";
import {prisma} from "@/utils/databases/prisma";

export const softDeleteSession = createAction(
    async (sessionId: string) => {
        const session = await prisma.session.update({
            where: {
                id: sessionId
            },
            data: {
                logged_out_at: new Date()
            }
        })

        if (session) return {
            message: "Logout successful"
        }
    }
)