import {Device_Type} from "@/app/generated/prisma";

export interface UserHeaderInformation {
    userAgent: string;
    osVersion?: string;
    browserVersion?: string;
    deviceType: Device_Type;
    ipAddress: string;
}