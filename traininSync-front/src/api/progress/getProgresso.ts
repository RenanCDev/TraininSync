import { api } from "../../services/api";

export const getAllRegistroDeProgresso = async () => {
  try {
    const response = await api.get("/registrodeprogresso/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar registros de progresso:", error);
    throw error;
  }
};

export const getRegistroDeProgressoById = async (id: number) => {
  try {
    const response = await api.get(`/registrodeprogresso/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar registro de progresso ${id}:`, error);
    throw error;
  }
};
