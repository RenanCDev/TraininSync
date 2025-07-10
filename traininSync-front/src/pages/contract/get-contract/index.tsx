import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllContratoDeServico,
  getContratoDeServicoById,
} from "../../../api/contract/getContract";
import { Button } from "../../../components/button";
import { formatPhoneNumber } from "../../../utils/celular/format";
import { formatCPF } from "../../../utils/cpf/format";
import { NavBar } from "../../../components/navbar";
import { ContractDetailsModal } from "../details-contract";
import { DataTable } from "../../../components/table";
import { getAlunoById } from "../../../api/aluno/getAluno";

interface ContratoDeServico {
  id: number;
  horario: {
    personal: string;
    dia: string;
    hora_inicio: string;
    hora_fim: string;
    local: string;
    disponivel?: boolean;
  };
  servico_desejado: {
    tipo_de_servico: string;
    descricao_do_servico: string;
    valor_do_servico: number;
  };
  status?: boolean;
  localidade_desejada: string;
  personal: string;
  aluno: string;
}

export function ContractTable() {
  const [contratos, setContratos] = useState<ContratoDeServico[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("");
  const [contratoSelecionado, setContratoSelecionado] =
    useState<ContratoDeServico | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    getAllContratoDeServico()
      .then(fetchAlunoDetails)
      .then(setContratos)
      .finally(() => setLoading(false));
  }, []);

  const contratosFiltrados = contratos.filter((contrato) => contrato.id);

  const handleClickContrato = async (id: number) => {
    try {
      const contrato = await getContratoDeServicoById(id);
      setContratoSelecionado(contrato);
    } catch (error) {
      console.error("Erro ao buscar contrato:", error);
    }
  };

  const handleAddContrato = () => {
    navigate("/register/contract");
  };

  // Função auxiliar para mapear dados do aluno nos contratos
  const fetchAlunoDetails = async (contratos: ContratoDeServico[]) => {
    const contratosComAlunos = await Promise.all(
      contratos.map(async (contrato) => {
        try {
          const aluno = await getAlunoById(Number(contrato.aluno)); // se for string ID
          return {
            ...contrato,
            alunoDetalhes: aluno, // adiciona dados do aluno no contrato
          };
        } catch {
          return contrato;
        }
      })
    );
    return contratosComAlunos;
  };

  const columns = [
    { label: "ID", accessor: "id", sortable: true },
    { label: "Aluno", accessor: "alunoDetalhes.nome", sortable: true },
    {
      label: "CPF do Aluno",
      accessor: "alunoDetalhes.cpf",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (contrato: any) => formatCPF(contrato.alunoDetalhes.cpf),
    },
    {
      label: "Número do Aluno",
      accessor: "alunoDetalhes.numero_de_celular",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (contrato: any) =>
        formatPhoneNumber(contrato.alunoDetalhes.numero_de_celular),
    },
  ];

  const fecharModal = () => setContratoSelecionado(null);

  if (loading)
    return (
      <p className="h-screen w-screen flex justify-center items-center text-5xl text-midPurple font-bold">
        Carregando os contratos...
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
            Contratos
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
            title="Adicionar contrato"
            onClick={handleAddContrato}
            width="w-full md:w-1/4"
          />
        </div>

        <div className="overflow-x-auto">
          <DataTable
            data={contratosFiltrados}
            columns={columns}
            rowKey="id"
            onRowClick={(contrato) => handleClickContrato(contrato.id)}
          />
        </div>
      </div>

      {contratoSelecionado && (
        <ContractDetailsModal
          contrato={contratoSelecionado}
          onClose={fecharModal}
        />
      )}
    </>
  );
}
