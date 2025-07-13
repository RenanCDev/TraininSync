import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllServico, getServicoById } from "../../../api/service/getService";
import { Button } from "../../../components/button";
import { NavBar } from "../../../components/navbar";
import { ServiceDetailsModal } from "../details-service";
import { DataTable } from "../../../components/table";

interface Servico {
  id: number;
  tipo_de_servico: string;
  descricao_do_servico: string;
  valor_do_servico: number;
}

export function ServiceTable() {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("");
  const [servicoSelecionado, setServicoSelecionado] = useState<Servico | null>(
    null
  );

  const navigate = useNavigate();

  useEffect(() => {
    getAllServico()
      .then(setServicos)
      .finally(() => setLoading(false));
  }, []);

  const servicosFiltrados = servicos.filter((servico) =>
    servico.tipo_de_servico.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleClickServico = async (id: number) => {
    try {
      const servico = await getServicoById(id);
      setServicoSelecionado(servico);
    } catch (error) {
      console.error("Erro ao buscar serviço:", error);
    }
  };

  const handleAddServico = () => {
    navigate("/register/service");
  };

  const columns = [
    { label: "ID", accessor: "id", sortable: true },
    { label: "Tipo", accessor: "tipo_de_servico", sortable: true },
    { label: "Descrição", accessor: "descricao_do_servico" },
    {
      label: "Valor",
      accessor: "valor_do_servico",
      render: (servico: Servico) =>
        `R$ ${servico.valor_do_servico.toFixed(2).replace(".", ",")}`,
    },
  ];

  const fecharModal = () => setServicoSelecionado(null);

  if (loading)
    return (
      <p className="h-screen w-screen flex justify-center items-center text-5xl text-midPurple font-bold">
        Carregando serviços...
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
            Serviços
          </h2>
        </div>

        <div className="flex flex-col gap-3 justify-between items-center mb-3 w-full md:flex-row">
          <input
            type="text"
            placeholder="Filtrar por tipo..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="p-4 border border-lowGray rounded w-full"
          />
          <Button
            title="Adicionar serviço"
            onClick={handleAddServico}
            width="w-full md:w-1/4"
          />
        </div>

        <div className="overflow-x-auto">
          <DataTable
            data={servicosFiltrados}
            columns={columns}
            rowKey="id"
            onRowClick={(servico) => handleClickServico(servico.id)}
          />
        </div>
      </div>

      {servicoSelecionado && (
        <ServiceDetailsModal
          servico={servicoSelecionado}
          onClose={fecharModal}
        />
      )}
    </>
  );
}
