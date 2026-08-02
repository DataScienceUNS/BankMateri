"use server"
import {GoogleAccountInformation} from "@/modules/auth/types/GoogleAccountInformation";
import {createAction} from "@/utils/actions/create-action";
import {prisma} from "@/utils/databases/prisma";

export const upsertAccount = createAction(
    async (account: GoogleAccountInformation) => {
        return prisma.user.upsert({
            where: {
                sso_email: account.email
            },
            update: {
                full_name: `${account.given_name} ${account.family_name}`,
                profile_picture: account.picture
            },
            create: {
                sso_email: account.email,
                full_name: `${account.given_name} ${account.family_name}`,
                profile_picture: account.picture,
                access_type: "guest",
            }
        });
    }
)