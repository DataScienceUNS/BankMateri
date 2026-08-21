import { ActionResponse } from "@/utils/actions/response";
import { AppError } from "@/utils/errors/app-error";

export function createAction<TArgs extends unknown[], TResult>(handler: (...args: TArgs) => Promise<TResult>) {
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
      if (
        err &&
        typeof err === "object" &&
        "digest" in err &&
        typeof (err as { digest?: unknown }).digest === "string"
      ) {
        const digest = (err as { digest: string }).digest;
        if (digest === "DYNAMIC_SERVER_USAGE" || digest.startsWith("NEXT_")) {
          throw err;
        }
      }

      if (err instanceof AppError) {
        return {
          success: false,
          status: err.status,
          message: err.message,
          error: {
            description: err.description || err.message,
          },
        };
      }

      const errorMessage = err instanceof Error ? err.message : String(err);
      const errorStack = err instanceof Error ? err.stack : undefined;

      return {
        success: false,
        status: 500,
        message: "Internal Server Error",
        error: {
          description: errorMessage,
          ...(process.env.NODE_ENV === "development" && { stack: errorStack }),
        },
      };
    }
  };
}
