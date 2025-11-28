import { z } from "zod";

export const registerSchema = z.object({
  userName: z.string().min(1, "Name is required").max(33, "Name is too long"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to Terms and Privacy Policy",
  }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
