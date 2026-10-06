import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(120),
  subject: z.string().trim().min(3, "Enter a subject of at least 3 characters.").max(120),
  message: z.string().trim().min(10, "Enter a message of at least 10 characters.").max(2000),
  website: z.string().max(0).optional(), // honeypot
});
export type ContactInput = z.infer<typeof contactSchema>;
