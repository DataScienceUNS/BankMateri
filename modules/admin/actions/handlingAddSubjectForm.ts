"use server"

import slugify from "slugify";
import {unwrap} from "@/utils/actions/unwrap-action";
import {prisma} from "@/utils/databases/prisma";
import {getCurrentUser} from "@/modules/auth/lib/getCurrentUser";
import {Subject} from "@/app/generated/prisma";

export type AddSubjectState = {
    success: boolean;
    message: string;
    subject?: Subject;
} | null;

export const handlingAddSubjectForm = async (_prevState: AddSubjectState, formData: FormData) => {
    const name = formData.get('name') as string;
    const keyword = formData.get('keyword') as string;
    const user = unwrap(await getCurrentUser())

    if (user?.user.access_type !== "admin") return {success: false, message: "You are not authorized to perform this action."}

    if (!name || !keyword) {
        return {success: false, message: "Name and keyword are required."}
    }

    const insertedSubject = await prisma.subject.create({
        data: {
            name,
            keyword,
            uploader_id: user.user.id,
            slug: slugify(name, {lower: true, strict: true, trim: true})
        }
    })

    return {
        success: true,
        message: "Subject created successfully",
        subject: insertedSubject
    }
}
