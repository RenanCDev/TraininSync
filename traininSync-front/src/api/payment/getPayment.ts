import { api } from "../../services/api";

export const getAllPagamento = async () => {
  try {
    const response = await api.get("/pagamento/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pagamentos:", error);
    throw error;
  }
};

export const getPagamentoById = async (id: number) => {
  try {
    const response = await api.get(`/pagamento/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar pagamento ${id}:`, error);
    throw error;
  }
};
