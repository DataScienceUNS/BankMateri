export class AppError extends Error {
    constructor(
        public readonly status: number,
        public readonly message: string,
        public readonly description?: string,
    ) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class ValidationError extends AppError {
    constructor(
        message = "Validation failed",
        description?: string,
    ) {
        super(400, message, description);
    }
}

export class UnauthorizedError extends AppError {
    constructor(
        message = "Unauthorized",
        description?: string,
    ) {
        super(401, message, description);
    }
}

export class ForbiddenError extends AppError {
    constructor(
        message = "Forbidden",
        description?: string,
    ) {
        super(403, message, description);
    }
}

export class NotFoundError extends AppError {
    constructor(
        message = "Not Found",
        description?: string,
    ) {
        super(404, message, description);
    }
}

export class ConflictError extends AppError {
    constructor(
        message = "Conflict",
        description?: string,
    ) {
        super(409, message, description);
    }
}

export class InternalServerError extends AppError {
    constructor(
        message = "Internal Server Error",
        description?: string,
    ) {
        super(500, message, description);
    }
}