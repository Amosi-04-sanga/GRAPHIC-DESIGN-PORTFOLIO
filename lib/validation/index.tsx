import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(30, { message: "name must have less than 30 characters" }),
  email: z.string().email(),
  message: z
    .string()
    .min(2, { message: "message must be at least 2 characters" })
    .max(30, { message: "message must have less than 1000 characters" }),
});
