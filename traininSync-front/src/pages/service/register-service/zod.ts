import * as z from "zod";

export const CreateServico = z.object({
  tipo_de_servico: z.string().min(5, "Digite um Usuário"),
  descricao_do_servico: z.string().min(1, "Digite uma senha"),
  valor_do_servico: z.string().min(1, "Digite uma senha"),
});
