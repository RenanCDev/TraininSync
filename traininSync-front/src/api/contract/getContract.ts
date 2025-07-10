import { api } from "../../services/api";

export const getAllContratoDeServico = async () => {
  try {
    const response = await api.get("/contratodeservico/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar contratos de serviço:", error);
    throw error;
  }
};

export const getContratoDeServicoById = async (id: number) => {
  try {
    const response = await api.get(`/contratodeservico/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar contrato de serviço ${id}:`, error);
    throw error;
  }
};
