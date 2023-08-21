import { z } from "zod";

export interface EditUserInputDto {
    id: string;
    name?: string;
    email?: string;
    age?: number;
}

export interface EditUserOutputDto {
  message: string;
}

export const EditUserSchema = z.object({
  id : z.string(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  age: z.number().int().positive().optional(),
}).transform(data => data as EditUserInputDto);