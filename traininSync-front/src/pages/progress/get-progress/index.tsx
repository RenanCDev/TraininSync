import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllRegistroDeProgresso } from "../../../api/progress/getProgresso";
import { getAlunoById } from "../../../api/aluno/getAluno";
import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navbar";
import { DataTable } from "../../../components/table";
import { formatCPF } from "../../../utils/cpf/format";
import { ProgressDetailsModal } from "../details-progress";

interface RegistroDeProgresso {
  id: number;
  data: string;
  peso: number;
  altura: number;
  imc?: number;
  aluno: string;
  alunoDetalhes?: {
    nome: string;
    cpf: string;
    numero_de_celular: string;
  };
}

export function ProgressTable() {
  const [progressos, setProgressos] = useState<RegistroDeProgresso[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("");
  const [alunoSelecionado, setAlunoSelecionado] = useState<any>(null);
  const [progressoSelecionado, setProgressoSelecionado] =
    useState<RegistroDeProgresso | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    getAllRegistroDeProgresso()
      .then(fetchAlunoDetails)
      .then(setProgressos)
      .finally(() => setLoading(false));
  }, []);

  const fetchAlunoDetails = async (progressos: RegistroDeProgresso[]) => {
    const progressosComAlunos = await Promise.all(
      progressos.map(async (progresso) => {
        try {
          const aluno = await getAlunoById(Number(progresso.aluno));
          return {
            ...progresso,
            alunoDetalhes: aluno,
          };
        } catch {
          return progresso;
        }
      })
    );
    return progressosComAlunos;
  };

  const progressosFiltrados = progressos.filter((progresso) =>
    progresso.alunoDetalhes?.nome?.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleClickProgresso = async (progresso: any) => {
    try {
      const aluno = await getAlunoById(progresso.aluno);
      setProgressoSelecionado(progresso);
      setAlunoSelecionado(aluno);
    } catch (error) {
      console.error("Erro ao buscar progresso:", error);
    }
  };

  const handleAddProgresso = () => {
    navigate("/register/progress");
  };

  const columns = [
    { label: "ID", accessor: "id", sortable: true },
    { label: "Aluno", accessor: "alunoDetalhes.nome", sortable: true },
    {
      label: "CPF do Aluno",
      accessor: "alunoDetalhes.cpf",
      render: (progresso: any) => formatCPF(progresso.alunoDetalhes.cpf),
    },
    { label: "Data", accessor: "data" },
  ];

  const fecharModal = () => setProgressoSelecionado(null);

  if (loading)
    return (
      <p className="h-screen w-screen flex justify-center items-center text-5xl text-midPurple font-bold">
        Carregando progressos...
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
            Progressos
          </h2>
        </div>

        <div className="flex flex-col gap-3 justify-between items-center mb-3 w-full md:flex-row">
          <input
            type="text"
            placeholder="Filtrar por nome do aluno..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="p-4 border border-lowGray rounded w-full"
          />
          <Button
            title="Adicionar Progresso"
            onClick={handleAddProgresso}
            width="w-full md:w-1/4"
          />
        </div>

        <div className="overflow-x-auto">
          <DataTable
            data={progressosFiltrados}
            columns={columns}
            rowKey="id"
            onRowClick={handleClickProgresso}
          />
        </div>
      </div>

      {progressoSelecionado && (
        <ProgressDetailsModal
          progresso={progressoSelecionado}
          alunoDetalhes={{
            nome: alunoSelecionado?.nome,
            cpf: alunoSelecionado?.cpf,
            numero_de_celular: alunoSelecionado?.numero_de_celular,
          }}
          onClose={fecharModal}
        />
      )}
    </>
  );
}
