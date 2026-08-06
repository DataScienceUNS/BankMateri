"use server"

import {uploadMaterialSchema} from "@/modules/uploadMaterial/schemas/uploadMaterialSchema";
import {z} from "zod";

type UploadMaterialValues = z.infer<typeof uploadMaterialSchema>
type FormErrors = Partial<Record<keyof UploadMaterialValues, string[]>>;
export type FormState = {
    success?: boolean;
    errors?: FormErrors;
    values?: UploadMaterialValues;
} | null;

export const handlingSubmitForm = async (_prevState: FormState, formData: FormData) => {
    const rawValues = {
        subject: formData.get('subject') as string,
        category: formData.get('category') as string,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        academicYear: formData.get('academic-year') as string,
        meetingNo: formData.get('meeting-no') as string,
        materialType: formData.get('material-type') as string,
        source: formData.get('source') as string,
        externalUrl: formData.get('external-url') as string,
    } as unknown as UploadMaterialValues

    const validated = uploadMaterialSchema.safeParse(rawValues)

    if (!validated.success) {
        return {
            success: false,
            errors: z.flattenError(validated.error).fieldErrors as Record<string, string[]>,
            values: rawValues
        }
    }

    console.log(validated.data)
    return null
};