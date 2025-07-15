import { api } from "../../services/api";

interface CreateAgendaSchema {
  personal: string;
  dia: string;
  hora_inicio: string;
  hora_fim: string;
  local: string;
  disponivel?: boolean;
}

export const createAgenda = async (agendaBody: CreateAgendaSchema) => {
  try {
    const response = await api.post("/agenda/", agendaBody);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar agenda:", error);
    throw error;
  }
};
