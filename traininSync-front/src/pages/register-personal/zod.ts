import * as z from "zod";
import { isValidCPF } from "../../utils/cpf/cpf-validation";

export const CreatePersonal = z.object({
  nome: z
    .string()
    .min(5, "Deve ter no mínimo 5 letras.")
    .max(50, "Deve ter no máximo 50 letras.")
    .regex(
      /^[A-Za-zÀ-ÿ\s]+$/,
      "O nome não pode conter números ou caracteres especiais."
    ),

  nome_social: z
    .string()
    .min(5, "Deve ter no mínimo 5 letras.")
    .max(50, "Deve ter no máximo 50 letras.")
    .regex(
      /^[A-Za-zÀ-ÿ\s]+$/,
      "O nome não pode conter números ou caracteres especiais."
    )
    .optional(),

  cpf: z
    .string()
    .min(11, "CPF é obrigatório.")
    .max(14, "CPF deve ter no máximo 14 caracteres")
    .refine(isValidCPF, { message: "CPF inválido" }),

  etnia: z.string(),
  sexo: z.string(),
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
  estado_civil: z.string(),
  cref: z.string(),
  numero_conta: z.coerce
    .number()
    .int({ message: "Digite uma conta valida" })
    .positive({ message: "Digite uma conta valida" }),
  agencia: z.coerce
    .number()
    .int({ message: "Digite uma agência valida" })
    .positive({ message: "Digite uma agência valida" }),
  especialidades: z
    .string()
    .min(5, "Informe pelo menos uma especialidade")
    .max(500, "Especialidades muito longas"),
  experiencia_profissional: z
    .string()
    .min(10, "Descreva sua experiência profissional")
    .max(1000, "Descrição muito longa"),
  horarios_disponiveis: z.coerce.number(),
  locais_disponiveis: z
    .string()
    .min(5, "Informe ao menos um local disponível")
    .max(500, "Lista de locais muito longa"),
});
