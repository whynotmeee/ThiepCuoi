"use client";

import { useEffect, useState } from "react";

// Cánh hoa rơi nhẹ nhàng trong nền
export default function FallingPetals({ count = 14 }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 12,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 10,
      opacity: 0.4 + Math.random() * 0.5,
    }));
    setPetals(items);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-40px] block rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            background:
              "radial-gradient(circle at 30% 30%, #f7e7e4, #b76e79)",
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
