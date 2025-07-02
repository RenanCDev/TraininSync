import { z } from "zod";

export const CreateRegisterProgress = z.object({
  data: z.string().refine(
    (val) => {
      const date = new Date(val);
      const today = new Date();
      return !isNaN(date.getTime()) && date < today;
    },
    { message: "Data inválida ou no futuro" }
  ),

  massa_gorda: z.number().nullable().optional(),

  massa_magra: z.number().nullable().optional(),

  massa_muscular: z.number().nullable().optional(),

  hidratacao: z.number().nullable().optional(),

  densidade_ossea: z.number().nullable().optional(),

  gordura_visceral: z.number().nullable().optional(),

  taxa_de_metabolismo_basal: z.coerce
    .number()
    .nonnegative("Taxa metabolica basal inválida")
    .max(15000, "Taxa metabolica basal inválida "),

  altura: z.number({ required_error: "Altura é obrigatória" }),

  peso: z.coerce
    .number({ invalid_type_error: "Digite no padrao 100.500" })
    .nonnegative("Peso inválido")
    .min(20, "Peso é obrigatório")
    .max(400, "Peso inválido"),

  aluno: z.number({ required_error: "Aluno é obrigatório" }),
});
