import {ActionResponse} from "@/utils/actions/response";
import {AppError} from "@/utils/errors/app-error";

export function createAction<TArgs extends unknown[], TResult>(
    handler: (...args: TArgs) => Promise<TResult>,
) {
    return async (...args: TArgs): Promise<ActionResponse<TResult>> => {
        try {
            const data = await handler(...args);

            return {
                success: true,
                status: 200,
                message: "Success",
                data,
            };
        } catch (err) {

            if (err instanceof AppError) {
                return {
                    success: false,
                    status: err.status,
                    message: err.message,
                    error: {
                        description: err.description,
                    },
                };
            }

            return {
                success: false,
                status: 500,
                message: "Internal Server Error",
                error: {
                    description: "Unexpected error occurred.",
                },
            };
        }
    };
}