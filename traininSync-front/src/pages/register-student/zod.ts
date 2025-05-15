import { z } from "zod";
import { isValidCPF } from "../../utils/cpf/cpf-validation";

export const CreateAluno = z.object({
  nome: z
    .string()
    .min(5, "Deve ter no mínimo 5 letras.")
    .max(50, "Deve ter no máximo 50 letras.")
    .regex(
      /^[A-Za-zÀ-ÿ\s]+$/,
      "O nome não pode conter números ou caracteres especiais."
    ),
  cpf: z
    .string()
    .min(11, "CPF é obrigatório.")
    .max(14, "CPF deve ter no máximo 14 caracteres")
    .refine(isValidCPF, { message: "CPF inválido" }),

  data_de_nascimento: z.string().refine(
    (val) => {
      const date = new Date(val);
      const today = new Date();
      return !isNaN(date.getTime()) && date < today;
    },
    { message: "Data de nascimento inválida ou no futuro" }
  ),
  email: z.string().email("E-mail inválido"),
  numero_de_celular: z
    .string()
    .regex(/^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/, "Número de celular inválido."),
  sexo: z.string(),
  nome_social: z
    .string()
    .min(5, "Deve ter no mínimo 5 letras.")
    .max(50, "Deve ter no máximo 50 letras.")
    .regex(
      /^[A-Za-zÀ-ÿ\s]+$/,
      "O nome não pode conter números ou caracteres especiais."
    )
    .optional(),
  etnia: z.string(),
  estado_civil: z.string(),
  bioimpedancia: z.string(),
  altura: z.coerce.number(),
  data_do_exame: z.string().refine(
    (val) => {
      const date = new Date(val);
      const today = new Date();
      return !isNaN(date.getTime()) && date < today;
    },
    { message: "Data inválida ou no futuro" }
  ),
  hora_do_exame: z.string(),
  agua_corporal_total: z.coerce.number(),
  proteinas: z.coerce.number(),
  minerais: z.coerce.number(),
  gordura_corporal: z.coerce.number(),
  peso: z.coerce.number(),
  massa_muscular_esqueletica: z.coerce.number(),
  imc: z.coerce.number(),
  pgc: z.coerce.number(),
  taxa_metabolica_basal: z.coerce.number(),
});
