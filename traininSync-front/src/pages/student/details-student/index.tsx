import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAluno } from "../../../api/aluno/deletAluno";
import { X } from "lucide-react";
import { formatCPF } from "../../../utils/cpf/format";
import { formatData } from "../../../utils/data/format";
import { formatPhoneNumber } from "../../../utils/celular/format";
import { ConfirmDeleteModal } from "../../../components/delet-modal";

interface Aluno {
  id: number;
  nome: string;
  nome_social?: string;
  email: string;
  cpf: string;
  data_de_nascimento: string;
  sexo: string;
  estado_civil: string;
  etnia: string;
  numero_de_celular: string;
  data_do_exame: string;
  hora_do_exame: string;
  altura: string;
  peso: string;
  imc: string;
  gordura_corporal: string;
  agua_corporal_total: string;
  massa_muscular_esqueletica: string;
  minerais: string;
  proteinas: string;
  taxa_metabolica_basal: number;
  status: boolean;
}

interface StudentDetailsModalProps {
  aluno: Aluno;
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

export function StudentDetailsModal({
  aluno,
  onClose,
}: StudentDetailsModalProps) {
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
      await deleteAluno(aluno.id);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao excluir aluno:", error);
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
    navigate(`/edit-student/${aluno.id}`, { state: { aluno } });
  };

  const initialLetter = aluno.nome ? aluno.nome.charAt(0).toUpperCase() : "?";
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
            {aluno.nome} #{aluno.id}
          </p>
        </div>

        <p>
          <strong>Nome Social:</strong> {aluno.nome_social || "Não informado"}
        </p>
        <p>
          <strong>Email:</strong> {aluno.email}
        </p>
        <p>
          <strong>CPF:</strong> {formatCPF(aluno.cpf)}
        </p>
        <p>
          <strong>Data de Nascimento:</strong>{" "}
          {formatData(aluno.data_de_nascimento)}
        </p>
        <p>
          <strong>Sexo:</strong> {aluno.sexo}
        </p>
        <p>
          <strong>Estado Civil:</strong> {aluno.estado_civil}
        </p>
        <p>
          <strong>Etnia:</strong> {aluno.etnia}
        </p>
        <p>
          <strong>Número de Celular:</strong>{" "}
          {formatPhoneNumber(aluno.numero_de_celular)}
        </p>

        <hr className="my-4" />

        <p>
          <strong>Data do Exame:</strong> {formatData(aluno.data_do_exame)}
        </p>
        <p>
          <strong>Hora do Exame:</strong> {aluno.hora_do_exame}
        </p>
        <p>
          <strong>Altura:</strong> {aluno.altura}
        </p>
        <p>
          <strong>Peso:</strong> {aluno.peso}
        </p>
        <p>
          <strong>IMC:</strong> {aluno.imc}
        </p>
        <p>
          <strong>Gordura Corporal:</strong> {aluno.gordura_corporal}
        </p>
        <p>
          <strong>Água Corporal Total:</strong> {aluno.agua_corporal_total}
        </p>
        <p>
          <strong>Massa Muscular Esquelética:</strong>{" "}
          {aluno.massa_muscular_esqueletica}
        </p>
        <p>
          <strong>Minerais:</strong> {aluno.minerais}
        </p>
        <p>
          <strong>Proteínas:</strong> {aluno.proteinas}
        </p>
        <p>
          <strong>Taxa Metabólica Basal:</strong> {aluno.taxa_metabolica_basal}
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
          message="Tem certeza que deseja excluir este aluno?"
        />
      )}
    </div>
  );
}
