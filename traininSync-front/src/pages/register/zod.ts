import { z } from "zod";

export const RegisterZod = z
  .object({
    usuario: z.string().min(3, "Digite um nome de usuário válido"),
    senha: z.string().min(1, "Digite a senha"),
    confirmarSenha: z.string().min(1, "Digite a senha"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas devem ser iguais",
    path: ["confirmarSenha"],
  });
