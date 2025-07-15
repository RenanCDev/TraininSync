import { api } from "../../services/api";

interface CreateRegistroDeProgressoSchema {
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

export const createRegistroDeProgresso = async (
  registroBody: CreateRegistroDeProgressoSchema
) => {
  try {
    const response = await api.post("/registrodeprogresso/", registroBody);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar registro de progresso:", error);
    throw error;
  }
};
