"use server"

import {createAction} from "@/utils/actions/create-action";
import {User} from "@/app/generated/prisma";
import {UserHeaderInformation} from "@/modules/shared/types/UserHeaderInformation";
import {prisma} from "@/utils/databases/prisma";

export const createNewUserSession = createAction(
    async (userAccount: User, userHeader: UserHeaderInformation) => {
        return prisma.session.create({
            data: {
                user_id: userAccount.id,
                user_agent: userHeader.userAgent,
                os_version: userHeader.osVersion,
                browser_version: userHeader.browserVersion,
                device_type: userHeader.deviceType,
                ip_address: userHeader.ipAddress,
                logged_in_at: new Date()
            },
            select: {
                id: true,
                user: {
                    select: {
                        id: true,
                        sso_email: true,
                        full_name: true,
                        profile_picture: true,
                        user_type: true,
                        access_type: true,
                        student: {
                            select: {
                                nim: true
                            }
                        },
                        lecture: {
                            select: {
                                nip: true
                            }
                        }
                    }
                }
            }
        })
    }
);