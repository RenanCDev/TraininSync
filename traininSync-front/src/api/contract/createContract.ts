import { api } from "../../services/api";

interface CreateContratoDeServicoSchema {
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

export const createContratoDeServico = async (
  contratoBody: CreateContratoDeServicoSchema
) => {
  try {
    const response = await api.post("/contratodeservico/", contratoBody);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar contrato de serviço:", error);
    throw error;
  }
};
