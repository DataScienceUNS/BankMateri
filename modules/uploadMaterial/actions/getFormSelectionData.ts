"use server"

import {createAction} from "@/utils/actions/create-action";
import {SupportedCloudStorage} from "@/config/SupportedCloudStorage";
import {AvailableAcademicYears} from "@/config/AvailableAcademicYears";
import {prisma} from "@/utils/databases/prisma";
import {MaterialCategoryLists} from "@/config/MaterialCategoryLists";

export const getFormSelectionData = createAction(
    async () => {
        const SubjectAvailable = await prisma.subject.findMany({
            select: {
                name: true,
                code: true,
            }
        }).then(res => res.map(subject => ({
            label: subject.name,
            value: subject.code
        })))

        return {
            SubjectAvailable,
            SupportedCloudStorage,
            AvailableAcademicYears,
            MaterialCategoryLists
        }
    }
);