import * as z from "zod";

export const LoginZod = z.object({
  username: z.string().min(3, "Digite um Usuário"),
  password: z.string().min(1, "Digite uma senha"),
});
