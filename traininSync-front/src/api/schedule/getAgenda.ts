import { api } from "../../services/api";

export const getAllAgenda = async () => {
  try {
    const response = await api.get("/agenda/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar agendas:", error);
    throw error;
  }
};

export const getAgendaById = async (id: number) => {
  try {
    const response = await api.get(`/agenda/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar agenda ${id}:`, error);
    throw error;
  }
};
