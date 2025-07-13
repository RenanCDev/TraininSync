import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAluno, getAlunoById } from "../../../api/aluno/getAluno";
import { Button } from "../../../components/button";
import { formatPhoneNumber } from "../../../utils/celular/format";
import { formatCPF } from "../../../utils/cpf/format";
import { NavBar } from "../../../components/navbar";
import { StudentDetailsModal } from "../details-student";
import { DataTable } from "../../../components/table";

interface Aluno {
  id: number;
  nome: string;
  nome_social?: string;
  email: string;
  cpf: string;
  numero_de_celular: string;
  data_de_nascimento: string;
  sexo: string;
  estado_civil: string;
  etnia: string;
  data_do_exame: string;
  altura: string;
  peso: string;
  hora_do_exame: string;
  imc: string;
  gordura_corporal: string;
  agua_corporal_total: string;
  massa_muscular_esqueletica: string;
  minerais: string;
  proteinas: string;
  taxa_metabolica_basal: number;
  status: boolean;
}

export function StudentTable() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("");
  const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    getAllAluno()
      .then(setAlunos) // ❌ sem sort -> usa ordem da API
      .finally(() => setLoading(false));
  }, []);

  const alunosFiltrados = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleClickAluno = async (id: number) => {
    try {
      const aluno = await getAlunoById(id);
      setAlunoSelecionado(aluno);
    } catch (error) {
      console.error("Erro ao buscar aluno:", error);
    }
  };

  const handleAddAluno = () => {
    navigate("/register/student");
  };

  const columns = [
    { label: "ID", accessor: "id", sortable: true },
    { label: "Nome", accessor: "nome", sortable: true },
    { label: "Email", accessor: "email" },
    {
      label: "CPF",
      accessor: "cpf",
      render: (aluno: Aluno) => formatCPF(aluno.cpf),
    },
    {
      label: "Número",
      accessor: "numero_de_celular",
      render: (aluno: Aluno) => formatPhoneNumber(aluno.numero_de_celular),
    },
  ];

  const fecharModal = () => setAlunoSelecionado(null);

  if (loading)
    return (
      <p className="h-screen w-screen flex justify-center items-center text-5xl text-midPurple font-bold">
        Carregando alunos...
      </p>
    );

  return (
    <>
      <NavBar variant="secondary">
        <Button title="Voltar" onClick={() => navigate(-1)} />
      </NavBar>

      <div className="p-8">
        <div className="flex justify-center gap-1.5 text-3xl sm:text-5xl font-black md:justify-start md:px-6 pb-6">
          <h2 className="font-bold text-midPurple mb-5 flex text-5xl">
            Alunos
          </h2>
        </div>

        <div className="flex flex-col gap-3 justify-between items-center mb-3 w-full md:flex-row">
          <input
            type="text"
            placeholder="Filtrar por nome..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="p-4 border border-lowGray rounded w-full"
          />
          <Button
            title="Adicionar aluno"
            onClick={handleAddAluno}
            width="w-full md:w-1/4"
          />
        </div>

        <div className="overflow-x-auto">
          <DataTable
            data={alunosFiltrados}
            columns={columns}
            rowKey="id"
            onRowClick={(aluno) => handleClickAluno(aluno.id)}
          />
        </div>
      </div>

      {alunoSelecionado && (
        <StudentDetailsModal aluno={alunoSelecionado} onClose={fecharModal} />
      )}
    </>
  );
}
