import { api } from "../../services/api";

interface CreateServiceSchema {
  tipo_de_servico: string;
  descricao_do_servico: string;
  valor_do_servico: number;
}

export const createServico = async (serviceBody: CreateServiceSchema) => {
  try {
    const response = await api.post("/servico/", serviceBody);
    return response.data;
  } catch (error) {
    console.error("Erro ao Criar serviço:", error);
    throw error;
  }
};
