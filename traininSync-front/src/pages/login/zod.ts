import * as z from 'zod';

export const LoginZod = z.object({
  usuario: z.string().min(5, 'Digite um Usuário'),
  senha: z.string().min(1, 'Digite uma senha'),
});
