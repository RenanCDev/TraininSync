import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "../../../components/button";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentEvent: any;
  setCurrentEvent: (event: any) => void;
  onSave: () => Promise<void>;
  onDelete?: () => void;
  isConfirmDeleteOpen?: boolean;
}

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

export function ScheduleModal({
  isOpen,
  onClose,
  currentEvent,
  setCurrentEvent,
  onSave,
  onDelete,
  isConfirmDeleteOpen,
}: ScheduleModalProps) {
  useEffect(() => {
    if (!isOpen || isConfirmDeleteOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, isConfirmDeleteOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="m-5 md:m-0 rounded-2xl bg-zinc-900 text-white p-5 md:p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-midPurple transition"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-midPurple">
            {currentEvent?.id ? "Editar Horário" : "Novo Horário"}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm text-white font-medium mb-1">
              ID do Personal
            </label>
            <input
              type="number"
              value={currentEvent.personal || ""}
              onChange={(e) =>
                setCurrentEvent({
                  ...currentEvent,
                  personal: Number(e.target.value),
                })
              }
              placeholder="Digite o ID do personal"
              className="w-full p-3 bg-purple-950 border border-midPurple text-white rounded-md focus:ring-2 focus:ring-midPurple"
            />
          </div>

          <div>
            <label className="block text-sm text-white font-medium mb-1">
              Local
            </label>
            <input
              type="text"
              value={currentEvent.local || ""}
              onChange={(e) =>
                setCurrentEvent({ ...currentEvent, local: e.target.value })
              }
              placeholder="Digite o local"
              className="w-full p-3 bg-purple-950 border border-midPurple text-white rounded-md focus:ring-2 focus:ring-midPurple"
            />
          </div>

          <div>
            <label className="block text-sm text-white font-medium mb-1">
              Dia
            </label>
            <input
              type="date"
              value={currentEvent.dia || ""}
              onChange={(e) =>
                setCurrentEvent({ ...currentEvent, dia: e.target.value })
              }
              className="w-full p-3 bg-purple-950 border border-midPurple text-white rounded-md focus:ring-2 focus:ring-midPurple"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white font-medium mb-1">
                Hora Início
              </label>
              <input
                type="time"
                value={currentEvent.hora_inicio || ""}
                onChange={(e) =>
                  setCurrentEvent({
                    ...currentEvent,
                    hora_inicio: e.target.value,
                  })
                }
                className="w-full p-3 bg-purple-950 border border-midPurple text-white rounded-md focus:ring-2 focus:ring-midPurple"
              />
            </div>

            <div>
              <label className="block text-sm text-white font-medium mb-1">
                Hora Fim
              </label>
              <input
                type="time"
                value={currentEvent.hora_fim || ""}
                onChange={(e) =>
                  setCurrentEvent({
                    ...currentEvent,
                    hora_fim: e.target.value,
                  })
                }
                className="w-full p-3 bg-purple-950 border border-midPurple text-white rounded-md focus:ring-2 focus:ring-midPurple"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Button title="Cancelar" onClick={onClose} />

          {currentEvent?.id && onDelete && (
            <Button
              title="Excluir"
              onClick={onDelete}
              className="bg-red-600 hover:bg-red-700 text-white"
            />
          )}

          <Button
            title="Salvar"
            onClick={onSave}
            disabled={!currentEvent?.personal || !currentEvent?.local}
          />
        </div>
      </div>
    </div>
  );
}

export function ConfirmDeleteModal({
  isOpen,
  onConfirm,
  onCancel,
  message,
}: ConfirmDeleteModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zinc-900 text-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
        <button
          onClick={onCancel}
          className="absolute top-3 right-3 text-white hover:text-red-500 transition"
        >
          <X />
        </button>

        <h2 className="text-lg font-semibold text-midPurple mb-4">
          Confirmar Exclusão
        </h2>
        <p className="text-gray-300 mb-6">{message}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white transition"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white transition"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
