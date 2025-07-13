import { api } from "../../services/api";

export async function deleteAluno(id: number) {
  const response = await api.delete(`/aluno/${id}/`);
  return response.data;
}
