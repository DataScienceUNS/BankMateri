export type FormErrors<TValues> = Partial<Record<keyof TValues, string[]>> & {
  general?: boolean;
};

export type ActionFormState<TValues, TData = void> = {
  success: boolean;
  errors: FormErrors<TValues>;
  values: Partial<TValues>;
  message?: string[];
  data?: TData;
} | null;
