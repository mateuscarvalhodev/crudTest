import z from 'zod';
export interface signupInputDTO {
  name: string;
  email: string;
  age: number;
}

export interface signupOutputDTO {
  message: string;
}

export const signupSchema = z.object({
  name: z.string().min(3).max(30),
  email: z.string().email(),
  age: z.number().min(18)
}).transform(data => data as signupInputDTO)