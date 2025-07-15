import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePagamento } from "../../../api/payment/deletPayment";
import { X } from "lucide-react";
import { formatCurrency } from "../../../utils/dinheiro";
import { formatData } from "../../../utils/data/format";
import { ConfirmDeleteModal } from "../../../components/delet-modal";

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

interface PaymentDetailsModalProps {
  pagamento: Payment;
  onClose: () => void;
}

function getColorByLetter(letter: string) {
  const colors = [
    "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3",
    "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39",
    "#FFC107", "#FF9800", "#FF5722", "#795548", "#607D8B",
  ];
  const charCode = letter.toUpperCase().charCodeAt(0);
  const index = charCode % colors.length;
  return colors[index];
}

export function PaymentDetailsModal({
  pagamento,
  onClose,
}: PaymentDetailsModalProps) {
  const navigate = useNavigate();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleDelete = () => {
    setShowConfirmDelete(true);
  };

  const confirmDelete = async () => {
    try {
      await deletePagamento(pagamento.id);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao excluir pagamento:", error);
    } finally {
      setShowConfirmDelete(false);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-payment/${pagamento.id}`, { state: { pagamento } });
  };

  const initialLetter = pagamento.id
    ? pagamento.id.toString().charAt(0).toUpperCase()
    : "?";
  const bgColor = getColorByLetter(initialLetter);

  return (
    <div className="fixed inset-0 bg-bgModal bg-opacity-40 flex justify-center items-center z-50">
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
            Pagamento #{pagamento.id}
          </p>
        </div>

        <h3 className="font-bold text-lg mb-2">👤 Aluno</h3>
        <p>
          <strong>Nome:</strong> {pagamento.alunoDetalhes.nome}
        </p>
        <p>
          <strong>CPF:</strong> {pagamento.alunoDetalhes.cpf}
        </p>

        <hr className="my-4" />

        <h3 className="font-bold text-lg mb-2">🛠️ Serviço Contratado</h3>
        <p>
          <strong>Tipo de Serviço:</strong>{" "}
          {pagamento.contratoDetalhes.servico_desejado.tipo_de_servico}
        </p>
        <p>
          <strong>Descrição:</strong>{" "}
          {pagamento.contratoDetalhes.servico_desejado.descricao_do_servico}
        </p>
        <p>
          <strong>Valor do Serviço:</strong>{" "}
          {formatCurrency(pagamento.contratoDetalhes.servico_desejado.valor_do_servico)}
        </p>

        <hr className="my-4" />

        <h3 className="font-bold text-lg mb-2">💳 Pagamento</h3>
        <p>
          <strong>Valor Pago:</strong> {formatCurrency(pagamento.valor)}
        </p>
        <p>
          <strong>Data do Pagamento:</strong>{" "}
          {formatData(pagamento.data_pagamento)}
        </p>
        <p>
          <strong>Descrição:</strong> {pagamento.descricao}
        </p>

        <div className="mt-6 flex gap-2 md:gap-4 justify-center md:justify-start">
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
          message="Tem certeza que deseja excluir este pagamento?"
        />
      )}
    </div>
  );
}
