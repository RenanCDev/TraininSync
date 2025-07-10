import { api } from "../../services/api";

export const getAllAluno = async () => {
  try {
    const response = await api.get("/aluno");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar aluno:", error);
    throw error;
  }
};

export const getAlunoById = async (id: number) => {
  try {
    const response = await api.get(`/aluno/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar aluno ${id}`, error);
    throw error;
  }
};
