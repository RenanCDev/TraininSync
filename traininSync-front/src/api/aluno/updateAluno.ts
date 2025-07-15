import { api } from "../../services/api";

interface UpdateAlunoData {
  nome: string;
  cpf: string;
  data_de_nascimento: string;
  email: string;
  numero_de_celular: string;
  sexo: string;
  nome_social?: string;
  etnia: string;
  estado_civil: string;
  status: boolean;
  bioimpedancia: string;
  altura: number;
  data_do_exame: string;
  hora_do_exame: string;
  agua_corporal_total: number;
  proteinas: number;
  minerais: number;
  gordura_corporal: number;
  peso: number;
  massa_muscular_esqueletica: number;
  imc: number;
  taxa_metabolica_basal: number;
}

export async function updateAluno(id: number, data: UpdateAlunoData) {
  const response = await api.put(`/aluno/${id}/`, data);
  return response.data;
}
