import { api } from "../../services/api";

export const deleteContratoDeServico = async (id: number) => {
  try {
    const response = await api.delete(`/contratodeservico/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar contrato de serviço ${id}:`, error);
    throw error;
  }
};
