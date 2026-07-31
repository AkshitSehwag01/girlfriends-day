export default function PrimaryButton({
  children,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
      rounded-full
      px-10
      py-4
      text-lg
      font-semibold
      bg-pink-500
      hover:bg-pink-600
      text-white
      transition-all
      duration-300
      hover:scale-105
      shadow-[0_0_40px_rgba(255,77,141,.4)]
      "
    >
      {children}
    </button>
  );
}