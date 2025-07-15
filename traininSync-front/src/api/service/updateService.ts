import { api } from "../../services/api";

interface UpdateServicoSchema {
  tipo_de_servico: string;
  descricao_do_servico: string;
  valor_do_servico: number;
}

export const updateServico = async (
  id: number,
  servicoBody: UpdateServicoSchema
) => {
  try {
    const response = await api.put(`/servico/${id}/`, servicoBody);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar serviço ${id}:`, error);
    throw error;
  }
};
