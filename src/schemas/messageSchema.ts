import { z } from "zod";

export const messageSchema = z.object({
    content: z 
        .string()
        .min(1, "Message content cannot be empty")
        .max(300, "Message content cannot exceed 300 characters"),
})