import * as z from "zod";

export const CreateServico = z.object({
  tipo_de_servico: z
    .string()
    .min(5, "Digite um Serviço")
    .max(150, "Tipo de serviço muito longo"),

  descricao_do_servico: z
    .string()
    .min(1, "Digite uma descrição")
    .max(500, "Descrição do serviço muito longa"),

  valor_do_servico: z.coerce
    .number()
    .nonnegative("Valor inválido")
    .min(1, "Valor inválido")
    .max(100000, "Valor inválido"),
});
