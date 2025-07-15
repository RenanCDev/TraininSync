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

  massa_gorda: z.coerce.number().nullable().optional(),

  massa_magra: z.coerce.number().nullable().optional(),

  massa_muscular: z.coerce.number().nullable().optional(),

  hidratacao: z.coerce.number().nullable().optional(),

  densidade_ossea: z.coerce.number().nullable().optional(),

  gordura_visceral: z.coerce.number().nullable().optional(),

  taxa_de_metabolismo_basal: z.coerce
    .number()
    .nonnegative("Taxa metabólica basal inválida")
    .max(15000, "Taxa metabólica basal inválida"),

  altura: z.coerce
    .number({ required_error: "Altura é obrigatória" })
    .positive("Altura inválida"),

  peso: z.coerce
    .number({ invalid_type_error: "Digite no padrão 100.500" })
    .nonnegative("Peso inválido")
    .min(20, "Peso é obrigatório")
    .max(400, "Peso inválido"),

  aluno: z.coerce
    .number({ required_error: "Aluno é obrigatório" }),

  imc:z.coerce.number().nullable().optional(),
});
