export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md relative animate-fadeIn">
        {/* Botón de cierre */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-primaryColor"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
