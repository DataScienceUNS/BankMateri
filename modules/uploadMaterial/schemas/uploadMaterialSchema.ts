import {z} from 'zod';
import {MaterialCategoryLists} from "@/config/MaterialCategoryLists";
import {AvailableAcademicYears} from "@/config/AvailableAcademicYears";
import {Material_Types} from "@/app/generated/prisma";
import {SupportedCloudStorage} from "@/config/SupportedCloudStorage";

const materialCategoryListEnum = MaterialCategoryLists.map(type => type.value)
const materialSourceEnum = SupportedCloudStorage.map(source => source.value)

export const uploadMaterialSchema = z.object({
    subject: z.string().min(1, {
        error: 'Subject is required',
    }),
    category: z.enum(materialCategoryListEnum, {
        error: 'Invalid category',
    }),
    title: z.string().min(1, {
        error: 'Title is required',
    }),
    academicYear: z.enum(AvailableAcademicYears, {
        error: 'Invalid academic year',
    }),
    meetingNo: z.coerce.number().min(1, {
        error: 'Minimum meeting number is 1',
    }).max(16, {
        error: 'Maximum meeting number is 16',
    }),
    materialType: z.enum(Material_Types, {
        error: 'Invalid material type',
    }),
    source: z.enum(materialSourceEnum, {
        error: "Source is required"
    }),
    externalUrl: z.url({error: "Invalid Url"})
})