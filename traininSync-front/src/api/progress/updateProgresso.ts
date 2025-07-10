import { api } from "../../services/api";

interface UpdateRegistroDeProgressoSchema {
  data: string;
  massa_gorda?: number;
  massa_magra?: number;
  massa_muscular?: number;
  hidratacao?: number;
  densidade_ossea?: number;
  gordura_visceral?: number;
  taxa_de_metabolismo_basal?: number;
  altura: number;
  peso: number;
  imc?: number;
  aluno: string;
}

export const updateRegistroDeProgresso = async (
  id: number,
  registroBody: UpdateRegistroDeProgressoSchema
) => {
  try {
    const response = await api.put(`/registrodeprogresso/${id}/`, registroBody);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar registro de progresso ${id}:`, error);
    throw error;
  }
};
