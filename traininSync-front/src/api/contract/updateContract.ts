import { api } from "../../services/api";

interface UpdateContratoDeServicoSchema {
  horario: {
    personal: string;
    dia: string;
    hora_inicio: string;
    hora_fim: string;
    local: string;
    disponivel?: boolean;
  };
  servico_desejado: {
    tipo_de_servico: string;
    descricao_do_servico: string;
    valor_do_servico: number;
  };
  status?: boolean;
  localidade_desejada: string;
  personal: string;
  aluno: string;
}

export const updateContratoDeServico = async (
  id: number,
  contratoBody: UpdateContratoDeServicoSchema
) => {
  try {
    const response = await api.put(`/contratodeservico/${id}/`, contratoBody);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar contrato de serviço ${id}:`, error);
    throw error;
  }
};
