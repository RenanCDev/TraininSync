import { z } from "zod";

export const CreateContratoDeServico = z.object({
  aluno: z
    .string()
    .min(1, "Aluno é obrigatório")
    .max(150, "Aluno deve ter no máximo 150 caracteres"),

  personal: z
    .string()
    .min(1, "Personal é obrigatório")
    .max(150, "Personal deve ter no máximo 150 caracteres"),

  localidade_desejada: z
    .string()
    .min(1, "Localidade desejada é obrigatória")
    .max(150, "Localidade deve ter no máximo 150 caracteres"),

  horario: z.object({

    dia: z.string().refine(
      (val) => {
        const date = new Date(val);
        return !isNaN(date.getTime());
      },
      { message: "Data inválida" }
    ),

    hora_inicio: z
      .string()
      .min(1, "Hora de início é obrigatória")
      .max(5, "Hora de início inválida"),

    hora_fim: z
      .string()
      .min(1, "Hora de fim é obrigatória")
      .max(5, "Hora de fim inválida"),

    local: z
      .string()
      .min(1, "Local é obrigatório")
      .max(150, "Local deve ter no máximo 150 caracteres"),
  }),

  servico_desejado: z.object({
    tipo_de_servico: z
      .string()
      .min(1, "Tipo de serviço é obrigatório")
      .max(150, "Tipo de serviço deve ter no máximo 150 caracteres"),

    descricao_do_servico: z
      .string()
      .min(1, "Descrição do serviço é obrigatória"),

    valor_do_servico: z
      .number({ invalid_type_error: "Digite um número válido" })
      .min(1, "Valor inválido")
      .nonnegative("Valor inválido")
      .max(100000.0, "Valor do serviço muito alto")
      .refine((val) => Number.isInteger(val * 100), {
        message: "O valor deve ter no máximo 2 casas decimais",
      }),
  }),
});
