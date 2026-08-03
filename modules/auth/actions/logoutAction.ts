"use server"

import {createAction} from "@/utils/actions/create-action";
import {cookies} from "next/headers";
import {unwrap} from "@/utils/actions/unwrap-action";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {getCurrentUser} from "@/modules/auth/lib/getCurrentUser";
import {softDeleteSession} from "@/modules/auth/repositories/softDeleteSession";

export const logoutAction = createAction(async () => {
    const cookieStore = await cookies();
    const user = unwrap(await getCurrentUser())

    if (user) {
        await softDeleteSession(user.id)
        cookieStore.delete('token')
    }

    revalidatePath('/', 'layout')
    redirect('/')
})