import * as z from "zod";

export const CreatePersonal = z.object({
  nome: z.string().min(1, "Informe o nome completo"),
  nome_social: z.string().optional(),
  cpf: z.string().min(11, "CPF inválido"),
  etnia: z.string().optional(),
  sexo: z.string().optional(),
  data_de_nascimento: z.string().optional(),
  email: z.string().email("E-mail inválido"),
  numero_de_celular: z.string().optional(),
  estado_civil: z.string().optional(),
  cref: z.string().optional(),
  numero_conta: z.string().optional(),
  agencia: z.string().optional(),
  especialidades: z.string().optional(),
  experiencia_profissional: z.string().optional(),
  horarios_disponiveis: z.string().optional(),
  locais_disponiveis: z.string().optional(),
});
