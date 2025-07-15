import { api } from "../../services/api";

export const deleteRegistroDeProgresso = async (id: number) => {
  try {
    const response = await api.delete(`/registrodeprogresso/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar registro de progresso ${id}:`, error);
    throw error;
  }
};
