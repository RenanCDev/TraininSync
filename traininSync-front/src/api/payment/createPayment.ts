import { api } from "../..//services/api";

interface CreatePaymentSchema {
  valor: string;
  descricao: string;
  aluno: number;
  contrato: number;
}

export const createPayment = async (paymentBody: CreatePaymentSchema) => {
  try {
    const response = await api.post("/pagamento/", paymentBody);
    return response.data;
  } catch (error) {
    console.error("Erro ao Criar pagamento:", error);
    throw error;
  }
};
