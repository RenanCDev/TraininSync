import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { ConfirmDeleteModal } from "../../../components/delet-modal";
import { deleteServico } from "../../../api/service/deletService";

interface Servico {
  id: number;
  tipo_de_servico: string;
  descricao_do_servico: string;
  valor_do_servico: number;
}

interface ServiceDetailsModalProps {
  servico: Servico;
  onClose: () => void;
}

export function ServiceDetailsModal({
  servico,
  onClose,
}: ServiceDetailsModalProps) {
  const navigate = useNavigate();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
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
      await deleteServico(servico.id);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
    } finally {
      setShowConfirmDelete(false);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-service/${servico.id}`, { state: { servico } });
  };

  return (
    <div className="fixed inset-0 bg-bgModal bg-opacity-40 flex justify-center items-center z-50">
      <div className="m-5 md:m-0 rounded-2xl bg-white text-black p-5 md:p-12 w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-midPurple text-2xl"
        >
          <X />
        </button>

        <div className="flex justify-center items-center flex-col">
          <p className="font-bold mt-3 mb-8 text-2xl text-center">
            {servico.tipo_de_servico} #{servico.id}
          </p>
        </div>

        <p>
          <strong>Descrição:</strong> {servico.descricao_do_servico}
        </p>
        <p>
          <strong>Valor:</strong> R$ {servico.valor_do_servico.toFixed(2)}
        </p>

        <div className="mt-6 flex gap-2 justify-center md:justify-start">
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
          message="Tem certeza que deseja excluir este serviço?"
        />
      )}
    </div>
  );
}
