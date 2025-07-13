import { api } from "../../services/api";

export const getAllPersonal = async () => {
  try {
    const response = await api.get("/personal/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar personais:", error);
    throw error;
  }
};

export const getPersonalById = async (id: number) => {
  try {
    const response = await api.get(`/personal/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar personal ${id}:`, error);
    throw error;
  }
};
