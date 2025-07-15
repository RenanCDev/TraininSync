import { api } from "../../services/api";

interface CreateServicoSchema {
  tipo_de_servico: string;
  descricao_do_servico: string;
  valor_do_servico: number;
}

export const createServico = async (servicoBody: CreateServicoSchema) => {
  try {
    const response = await api.post("/servico/", servicoBody);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar serviço:", error);
    throw error;
  }
};
