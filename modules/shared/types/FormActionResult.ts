export type FormActionResult<
  TData = unknown,
  TErrors = unknown,
  TValues = unknown,
> =
  | {
      success: true;
      message?: string;
      data: TData;
    }
  | {
      success: false;
      message?: string;
      errors?: TErrors;
      values?: TValues;
    };
