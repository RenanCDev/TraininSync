import { api } from "../../services/api";

interface UpdatePagamentoSchema {
  valor: string;
  descricao: string;
  aluno: string;
  contrato: number;
}

export const updatePagamento = async (
  id: number,
  pagamentoBody: UpdatePagamentoSchema
) => {
  try {
    const response = await api.put(`/pagamento/${id}/`, pagamentoBody);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar pagamento ${id}:`, error);
    throw error;
  }
};
