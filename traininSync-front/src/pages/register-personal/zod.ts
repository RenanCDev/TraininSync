import * as z from "zod";

export const CreatePersonal = z.object({
  nome: z.string().min(1, "Informe o nome completo"),
  nome_social: z.string().optional(),
  cpf: z.string().min(11, "CPF inválido"),
  etnia: z.string(),
  sexo: z.string(),
  data_de_nascimento: z.string(),
  email: z.string().email("E-mail inválido"),
  numero_de_celular: z.string(),
  estado_civil: z.string(),
  cref: z.string(),
  numero_conta:  z.coerce .number(),
  agencia: z.coerce .number(),
  especialidades: z.string(),
  experiencia_profissional: z.string(),
  horarios_disponiveis: z.coerce .number() ,
  locais_disponiveis: z.string(),
});
