import { api } from "../../services/api";

export const deleteAgenda = async (id: number) => {
  try {
    const response = await api.delete(`/agenda/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar agenda ${id}:`, error);
    throw error;
  }
};
