import { api } from "../../services/api";

interface UpdatePersonalSchema {
  dados_bancarios: {
    numero_conta: number;
    agencia: number;
  };
  nome: string;
  cpf: string;
  data_de_nascimento: string;
  email: string;
  numero_de_celular: string;
  sexo: string;
  nome_social?: string | null;
  etnia: string;
  estado_civil: string;
  status: boolean;
  cref: string;
  especialidades?: string;
  experiencia_profissional?: string;
  horarios_disponiveis: number;
  locais_disponiveis: string;
}

export const updatePersonal = async (
  id: number,
  personalBody: UpdatePersonalSchema
) => {
  try {
    const response = await api.put(`/personal/${id}/`, personalBody);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar personal ${id}:`, error);
    throw error;
  }
};
