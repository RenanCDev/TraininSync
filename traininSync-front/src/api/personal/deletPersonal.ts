import { api } from "../../services/api";

export const deletePersonal = async (id: number) => {
  try {
    const response = await api.delete(`/personal/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar personal ${id}:`, error);
    throw error;
  }
};
