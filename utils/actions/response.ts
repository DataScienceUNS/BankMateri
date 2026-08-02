export interface ActionSuccess<T> {
    success: true;
    status: number;
    message: string;
    data: T;
}

export interface ActionError {
    success: false;
    status: number;
    message: string;
    error: {
        description?: string;
    };
}

export type ActionResponse<T> =
    | ActionSuccess<T>
    | ActionError;