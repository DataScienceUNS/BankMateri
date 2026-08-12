"use server"

import {createAction} from "@/utils/actions/create-action";
import {prisma} from "@/utils/databases/prisma";

export const getAllSubject = createAction(
    async () => {
        return prisma.subject.findMany({
            select: {
                name: true,
                code: true,
                hex_color: true,
                term: true,
                _count: {
                    select: {
                        materials: true
                    }
                }
            }
        })
    }
)