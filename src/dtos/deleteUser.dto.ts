import { z } from 'zod';

export interface DeleteUserInputDTO {
  id: string;
}

export interface DeleteUserOutputDTO {
  message: string;
}

export const DeleteUserSchema = z.object({
  id: z.string()
}).transform(data => data as DeleteUserInputDTO)