"use server"

import {createAction} from "@/utils/actions/create-action";
import {SupportedCloudStorage} from "@/config/SupportedCloudStorage";
import {AvailableAcademicYears} from "@/config/AvailableAcademicYears";
import {MaterialTypesList} from "@/config/MaterialTypesList"
import {prisma} from "@/utils/databases/prisma";

export const GetFormSelectionData = createAction(
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
            MaterialTypesList
        }
    }
);