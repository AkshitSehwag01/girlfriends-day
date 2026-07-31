export default function PrimaryButton({
    children,
    onClick,
    type = "button"
  }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
      >
        {children}
      </button>
    );
  }