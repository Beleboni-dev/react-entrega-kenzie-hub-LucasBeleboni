import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email('Insira um email válido.')
    .nonempty('O email é obrigatório.'),
  password: z.string().nonempty('Preencha a senha'),
});
