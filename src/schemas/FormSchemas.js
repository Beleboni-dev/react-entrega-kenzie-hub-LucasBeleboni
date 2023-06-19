import { z } from 'zod';

export const formSchema = z
  .object({
    name: z
    .string()
    .nonempty('O nome é obrigatório.'),
    email: z
      .string()
      .email('Insira um email válido.')
      .nonempty('O email é obrigatório.'),
    password: z
      .string()
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
      .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
      .regex(/\d/, 'A senha deve conter pelo menos um número')
      .regex(
        /[@$!%*?&[#{}()[\]]/,
        'A senha deve conter pelo menos um caractere especial'
      ),
    bio: z
    .string()
    .nonempty('Campo obrigatório'),
    contact: z
    .string()
    .nonempty('Campo obrigatório'),
    passwordConfirm: z
    .string().min(1, 'Confirmar a senha é obrigatório'),
    course_module: z.string().nonempty('Campo obrigatório'),
  })
  .refine(({ password, passwordConfirm }) => passwordConfirm === password, {
    message: 'As senhas não coincidem',
    path: ['passwordConfirm'],
  });
