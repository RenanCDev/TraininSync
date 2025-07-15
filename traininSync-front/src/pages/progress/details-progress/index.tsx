import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRegistroDeProgresso } from "../../../api/progress/deletProgresso";
import { X } from "lucide-react";
import { ConfirmDeleteModal } from "../../../components/delet-modal";

interface ProgressDetailsModalProps {
  progresso: any;
  alunoDetalhes?: {
    nome: string;
    cpf: string;
    numero_de_celular: string;
  };
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

export function ProgressDetailsModal({
  progresso,
  onClose,
}: ProgressDetailsModalProps) {
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

  const handleDelete = () => setShowConfirmDelete(true);

  const confirmDelete = async () => {
    try {
      await deleteRegistroDeProgresso(progresso.id);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao excluir progresso:", error);
    } finally {
      setShowConfirmDelete(false);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-progress/${progresso.id}`, { state: { progresso } });
  };

  const initialLetter = progresso.alunoDetalhes?.nome
    ? progresso.alunoDetalhes?.nome.toString().charAt(0).toUpperCase()
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
            Progresso #{progresso.id}
          </p>
        </div>

        <p>
          <strong>Aluno:</strong> {progresso.alunoDetalhes?.nome}
        </p>
        <p>
          <strong>CPF:</strong> {progresso.alunoDetalhes?.cpf}
        </p>
        <p>
          <strong>Número:</strong> {progresso.alunoDetalhes?.numero_de_celular}
        </p>
        <p>
          <strong>Data:</strong> {progresso.data}
        </p>
        <p>
          <strong>Peso:</strong> {progresso.peso} kg
        </p>
        <p>
          <strong>Altura:</strong> {progresso.altura} m
        </p>
        <p>
          <strong>IMC:</strong> {progresso.imc ?? "N/A"}
        </p>

        <hr className="my-4" />

        <h3 className="font-bold text-lg mb-2">📊 Medidas</h3>
        {[
          ["Massa Magra", progresso.massa_magra],
          ["Massa Muscular", progresso.massa_muscular],
          ["Gordura Corporal", progresso.massa_gorda],
          ["Hidratação", progresso.hidratacao],
          ["Densidade Óssea", progresso.densidade_ossea],
          ["Gordura Visceral", progresso.gordura_visceral],
          ["Taxa Metabólica Basal", progresso.taxa_de_metabolismo_basal],
        ].map(([label, value]) => (
          <p key={label}>
            <strong>{label}:</strong> {value ?? "N/A"}
          </p>
        ))}

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
          message="Tem certeza que deseja excluir este progresso?"
        />
      )}
    </div>
  );
}
