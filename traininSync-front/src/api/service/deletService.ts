import { api } from "../../services/api";

export const deleteServico = async (id: number) => {
  try {
    const response = await api.delete(`/servico/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar serviço ${id}:`, error);
    throw error;
  }
};
