import { api } from "../../services/api";

interface CreatePagamentoSchema {
  valor: string;
  descricao: string;
  aluno: string;
  contrato: number;
}

export const createPagamento = async (pagamentoBody: CreatePagamentoSchema) => {
  try {
    const response = await api.post("/pagamento/", pagamentoBody);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar pagamento:", error);
    throw error;
  }
};
