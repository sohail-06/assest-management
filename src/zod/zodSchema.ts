import z from "zod";

export const assetZodSchema = z.object({
  title: z.string({
    required_error: "Title is required!",
    invalid_type_error: "Title will be a string!",
  }),
  description: z.string(),
  assignee: z.string().optional(),
  created_by: z.string().optional(),
  assets_type: z.string().optional(),
  attachment: z.string().optional(),
  status: z.string().optional(),
});
