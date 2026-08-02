import { ActionResponse } from "@/utils/actions/response";

export function unwrap<T>(response: ActionResponse<T>): T {
    if (!response.success) {
        throw new Error(response.message || "Action failed");
    }
    return response.data;
}