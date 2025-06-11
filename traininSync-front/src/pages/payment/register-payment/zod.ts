import { z } from "zod";

export const CreatePayment = z.object({
  valor: z.string().max(100000, "Valor inválido"),

  descricao: z
    .string()
    .min(1, "Descrição é obrigatória")
    .max(255, "Descrição deve ter no máximo 255 caracteres"),

  aluno: z.coerce
    .number({ required_error: "Aluno é obrigatório" })
    .min(1, "Aluno é obrigatório"),

  contrato: z.coerce
    .number({ required_error: "Contrato é obrigatório" })
    .nonnegative("Valor inválido")
    .min(1, "Valor é obrigatório")
    .max(10000000, "Valor inválido"),
});
