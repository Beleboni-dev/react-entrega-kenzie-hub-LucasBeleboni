import { z } from "zod";

export const loginSchemas = z.object({
  email: z
    .string()
    .email("Insira um email válido.")
    .nonempty("O email é obrigatório."),
  password: z
    .string()
    .nonempty("Preencha a senha"),
})
