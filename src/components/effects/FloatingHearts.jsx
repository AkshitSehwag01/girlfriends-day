import { FaHeart } from "react-icons/fa";

export default function FloatingHearts() {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {hearts.map((_, i) => (
        <FaHeart
          key={i}
          className="absolute text-pink-400/30 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${12 + Math.random() * 25}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}

    </div>
  );
}