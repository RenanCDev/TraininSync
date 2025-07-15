import { z } from "zod";

export const CreatePayment = z.object({
  valor: z
    .string()
    .min(1, "O valor é obrigatório")
    .refine(
      (val) => !isNaN(Number(val.replace(/[^\d,-]/g, "").replace(",", "."))),
      {
        message: "Valor inválido",
      }
    ),

  descricao: z
    .string()
    .min(1, "Descrição é obrigatória")
    .max(255, "Descrição deve ter no máximo 255 caracteres"),

  aluno: z.coerce
    .string({ required_error: "Aluno é obrigatório" })
    .min(1, "Aluno é obrigatório"),

  contrato: z.coerce
    .number({ required_error: "Contrato é obrigatório" })
    .nonnegative("Valor inválido")
    .min(1, "Valor é obrigatório")
    .max(10000000, "Valor inválido"),
});
