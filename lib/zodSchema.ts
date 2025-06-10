import {z} from "zod";

export const personSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    age: z.coerce.number().int().min(1, "Age must be at least 1"),
});