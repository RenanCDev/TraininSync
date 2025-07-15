interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClick: () => void;
  onCancel: () => void;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}

export function ConfirmDeleteModal({
  isOpen,
  onClick,
  onCancel,
  message = "Tem certeza que deseja excluir?",
  confirmText = "Sim, excluir",
  cancelText = "Cancelar",
}: ConfirmDeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-bgModal bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClick}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            {confirmText}
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}
