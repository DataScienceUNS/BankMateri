import { z } from "zod";

export const reportingMaterialSchema = z.object({
  reason: z.string().min(1, {
    error: "Report reason is required",
  }),
  details: z
    .string()
    .max(500, {
      error: "Additional details must be less than 500 characters",
    })
    .min(1, {
      error: "Additional details are required",
    }),
});
