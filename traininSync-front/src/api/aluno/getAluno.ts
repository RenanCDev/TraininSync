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
