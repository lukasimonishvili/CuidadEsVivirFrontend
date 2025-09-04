export default function Button({ children, type="button", onClick, className }) {
  return (
    <button type={type} onClick={onClick} className={`bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-xl transition ${className}`}>
      {children}
    </button>
  );
}


