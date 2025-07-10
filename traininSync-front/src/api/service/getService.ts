import { api } from "../../services/api";

export const getAllServico = async () => {
  try {
    const response = await api.get("/servico/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar serviços:", error);
    throw error;
  }
};

export const getServicoById = async (id: number) => {
  try {
    const response = await api.get(`/servico/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar serviço ${id}:`, error);
    throw error;
  }
};
