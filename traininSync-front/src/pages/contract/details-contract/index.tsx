import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteContratoDeServico } from "../../../api/contract/deletContract";
import { X } from "lucide-react";
import { formatData } from "../../../utils/data/format";
import { ConfirmDeleteModal } from "../../../components/delet-modal";

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

interface ContractDetailsModalProps {
  contrato: ContratoDeServico;
  onClose: () => void;
}

function getColorByLetter(letter: string) {
  const colors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#607D8B",
  ];
  const charCode = letter.toUpperCase().charCodeAt(0);
  const index = charCode % colors.length;
  return colors[index];
}

export function ContractDetailsModal({
  contrato,
  onClose,
}: ContractDetailsModalProps) {
  const navigate = useNavigate();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleDelete = () => {
    setShowConfirmDelete(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteContratoDeServico(contrato.id);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao excluir contrato:", error);
    } finally {
      setShowConfirmDelete(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    console.log("teste LOOP");

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleEdit = () => {
    navigate(`/edit-contract/${contrato.id}`, { state: { contrato } });
  };

  const initialLetter = contrato.id
    ? contrato.id.toString().charAt(0).toUpperCase()
    : "?";
  const bgColor = getColorByLetter(initialLetter);

  return (
    <div className="fixed inset-0 bg-bgModal bg-opacity-40 flex justify-center items-center z-50 bottom">
      <div className="m-5 md:m-0 rounded-2xl bg-white text-black p-5 md:p-12 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-midPurple text-2xl"
        >
          <X />
        </button>

        <div className="flex justify-center items-center flex-col">
          <div
            className="rounded-full h-32 w-32 flex items-center justify-center text-white font-bold text-5xl select-none"
            style={{ backgroundColor: bgColor }}
          >
            {initialLetter}
          </div>
          <p className="font-bold mt-3 mb-10 text-2xl text-wrap">
            Contrato #{contrato.id}
          </p>
        </div>

        <p>
          <strong>Status:</strong> {contrato.status ? "Ativo" : "Inativo"}
        </p>
        <p>
          <strong>Localidade Desejada:</strong> {contrato.localidade_desejada}
        </p>
        <p>
          <strong>Aluno ID:</strong> {contrato.aluno}
        </p>
        <p>
          <strong>Personal ID:</strong> {contrato.personal}
        </p>

        <hr className="my-4" />

        <h3 className="font-bold text-lg mb-2">📅 Horário</h3>
        <p>
          <strong>Dia:</strong> {formatData(contrato.horario.dia)}
        </p>
        <p>
          <strong>Hora Início:</strong> {contrato.horario.hora_inicio}
        </p>
        <p>
          <strong>Hora Fim:</strong> {contrato.horario.hora_fim}
        </p>
        <p>
          <strong>Local:</strong> {contrato.horario.local}
        </p>
        <p>
          <strong>Disponível:</strong>{" "}
          {contrato.horario.disponivel ? "Sim" : "Não"}
        </p>

        <hr className="my-4" />

        <h3 className="font-bold text-lg mb-2">🛠️ Serviço Desejado</h3>
        <p>
          <strong>Tipo de Serviço:</strong>{" "}
          {contrato.servico_desejado.tipo_de_servico}
        </p>
        <p>
          <strong>Descrição:</strong>{" "}
          {contrato.servico_desejado.descricao_do_servico}
        </p>
        <p>
          <strong>Valor:</strong> R${" "}
          {contrato.servico_desejado.valor_do_servico.toFixed(2)}
        </p>

        <div className="mt-6 flex gap-2 md:gap-4 justify-center md:justify-start ">
          <button
            onClick={handleEdit}
            className="bg-midPurple hover:bg-darkPurple text-white px-4 py-2 rounded"
          >
            Editar
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Excluir
          </button>
        </div>
      </div>

      {showConfirmDelete && (
        <ConfirmDeleteModal
          isOpen={showConfirmDelete}
          onClick={confirmDelete}
          onCancel={() => setShowConfirmDelete(false)}
          message="Tem certeza que deseja excluir este contrato?"
        />
      )}
    </div>
  );
}
