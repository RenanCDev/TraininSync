import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllPagamento,
  getPagamentoById,
} from "../../../api/payment/getPayment";
import { getAlunoById } from "../../../api/aluno/getAluno";
import { getContratoDeServicoById } from "../../../api/contract/getContract";
import { Button } from "../../../components/button";
import { formatCurrency } from "../../../utils/dinheiro";
import { NavBar } from "../../../components/navbar";
import { DataTable } from "../../../components/table";
import { PaymentDetailsModal } from "../details-payment";
import { formatData } from "../../../utils/data/format";

interface Payment {
  id: number;
  valor: number;
  descricao: string;
  data_pagamento: string;
  alunoDetalhes: {
    id: string;
    nome: string;
    cpf: string;
  };
  contratoDetalhes: {
    id: number;
    servico_desejado: {
      tipo_de_servico: string;
      descricao_do_servico: string;
      valor_do_servico: number;
    };
  };
}

export function PaymentTable() {
  const [pagamentos, setPagamentos] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("");
  const [pagamentoSelecionado, setPagamentoSelecionado] =
    useState<Payment | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPagamento()
      .then(fetchDetalhesDosPagamentos)
      .then(setPagamentos)
      .finally(() => setLoading(false));
  }, []);

  const fetchDetalhesDosPagamentos = async (pagamentos: any[]) => {
    const pagamentosComDetalhes = await Promise.all(
      pagamentos.map(async (pagamento) => {
        try {
          const aluno = await getAlunoById(pagamento.aluno);
          const contrato = await getContratoDeServicoById(pagamento.contrato);
          return {
            ...pagamento,
            alunoDetalhes: aluno,
            contratoDetalhes: contrato,
            valor: parseFloat(pagamento.valor),
          };
        } catch (error) {
          console.error("Erro ao buscar detalhes:", error);
          return {
            ...pagamento,
            alunoDetalhes: { id: "", nome: "Não encontrado", cpf: "" },
            contratoDetalhes: {
              id: 0,
              servico_desejado: {
                tipo_de_servico: "Não encontrado",
                descricao_do_servico: "",
                valor_do_servico: 0,
              },
            },
          };
        }
      })
    );
    return pagamentosComDetalhes;
  };

  const pagamentosFiltrados = pagamentos.filter((pagamento) =>
    pagamento.alunoDetalhes.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const columns = [
    { label: "ID", accessor: "id", sortable: true },
    { label: "Aluno", accessor: "alunoDetalhes.nome", sortable: true },
    {
      label: "Contrato",
      accessor: "contratoDetalhes.servico_desejado.tipo_de_servico",
    },
    {
      label: "Valor",
      accessor: "valor",
      render: (pagamento: Payment) => formatCurrency(pagamento.valor),
    },
    {
      label: "Data",
      accessor: "data_pagamento",
      render: (pagamento: Payment) => formatData(pagamento.data_pagamento),
    },
  ];

  const handleAddPayment = () => navigate("/register/payment");

  const handleClickPagamento = async (id: number) => {
    try {
      const pagamento = await getPagamentoById(id);
      const aluno = await getAlunoById(pagamento.aluno);
      const contrato = await getContratoDeServicoById(pagamento.contrato);
      setPagamentoSelecionado({
        ...pagamento,
        alunoDetalhes: aluno,
        contratoDetalhes: contrato,
        valor: parseFloat(pagamento.valor),
      });
    } catch (error) {
      console.error("Erro ao buscar pagamento:", error);
    }
  };

  const fecharModal = () => setPagamentoSelecionado(null);

  if (loading)
    return (
      <p className="h-screen w-screen flex justify-center items-center text-5xl text-midPurple font-bold">
        Carregando pagamentos...
      </p>
    );

  return (
    <>
      <NavBar variant="secondary">
        <Button title="Voltar" onClick={() => navigate(-1)} />
      </NavBar>

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl sm:text-5xl font-black text-midPurple">
            Pagamentos
          </h1>
          <Button title="Novo Pagamento" onClick={handleAddPayment} />
        </div>

        <input
          type="text"
          placeholder="Filtrar por aluno..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="p-4 border border-lowGray rounded w-full mb-4"
        />

        <div className="overflow-x-auto">
          <DataTable
            data={pagamentosFiltrados}
            columns={columns}
            rowKey="id"
            onRowClick={(pagamento) => handleClickPagamento(pagamento.id)}
          />
        </div>
      </div>

      {pagamentoSelecionado && (
        <PaymentDetailsModal
          pagamento={pagamentoSelecionado}
          onClose={fecharModal}
        />
      )}
    </>
  );
}
