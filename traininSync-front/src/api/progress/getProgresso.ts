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

export const getUltimoProgresso = async (alunoId: number) => {
  try {
    const response = await api.get("/registrodeprogresso/");
    const data = response.data.results ?? response.data;

    if (!Array.isArray(data) || data.length === 0) return null;

    const registrosDoAluno = data.filter((item: any) => item.aluno === alunoId);

    if (registrosDoAluno.length === 0) return null;

    const ordenado = registrosDoAluno.sort(
      (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
    );

    return ordenado[0];
  } catch (error) {
    console.error(`Erro ao buscar progresso do aluno ${alunoId}:`, error);
    throw error;
  }
};
