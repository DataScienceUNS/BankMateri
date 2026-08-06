"use server"

import {Material} from "@/app/generated/prisma";

export type AddMaterialState = {
    success: boolean;
    message: string;
    material?: Material;
} | null;

export const handlingSubmitForm = async (_prevState: AddMaterialState, formData: FormData) => {
    const subject = formData.get('subject') as string;
    const category = formData.get('category') as string;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const academicYear = formData.get('academic-year') as string;
    const meetingNo = formData.get('meeting-no') as string;
    const materialType = formData.get('material-type') as string;
    const source = formData.get('source') as string;
    const externalUrl = formData.get('external-url') as string;

    console.log({
        subject,
        category,
        title,
        description,
        academicYear,
        meetingNo,
        materialType,
        source,
        externalUrl
    })

    return null
};