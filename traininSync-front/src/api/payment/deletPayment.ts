import { api } from "../../services/api";

export const deletePagamento = async (id: number) => {
  try {
    const response = await api.delete(`/pagamento/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar pagamento ${id}:`, error);
    throw error;
  }
};
