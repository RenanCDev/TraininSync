import { api } from "../../services/api";

interface UpdateAgendaSchema {
  personal: string;
  dia: string;
  hora_inicio: string;
  hora_fim: string;
  local: string;
  disponivel?: boolean;
}

export const updateAgenda = async (
  id: number,
  agendaBody: UpdateAgendaSchema
) => {
  try {
    const response = await api.put(`/agenda/${id}/`, agendaBody);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar agenda ${id}:`, error);
    throw error;
  }
};
