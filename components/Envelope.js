"use client";

import { useState } from "react";
import config from "@/data/config";

// Màn mở đầu "Chạm để mở thiệp" — đặc trưng phong cách cinelove.
// Bấm để mở sẽ ẩn overlay và phát nhạc (nếu có).
export default function Envelope({ onOpen }) {
  const { groom, bride, nameOrder, coverImage } = config;
  const [opening, setOpening] = useState(false);

  const first = nameOrder === "bride" ? bride.name : groom.name;
  const second = nameOrder === "bride" ? groom.name : bride.name;

  const handleOpen = () => {
    setOpening(true);
    setTimeout(() => onOpen?.(), 900);
  };

  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col items-center justify-center px-6 text-center transition-all duration-700 ${
        opening ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        background: coverImage
          ? `linear-gradient(rgba(30,20,20,0.45), rgba(30,20,20,0.55)), url(${coverImage}) center/cover`
          : "linear-gradient(160deg, #f7e7e4 0%, #fdfbf7 45%, #e8ede2 100%)",
        transform: opening ? "scale(1.05)" : "scale(1)",
      }}
    >
      <h1
        className={`big-word font-script text-5xl leading-tight md:text-7xl ${
          coverImage ? "text-white" : "text-ink"
        }`}
      >
        Wedding
        <br />
        Invitation
      </h1>

      <div className="my-8 flex flex-col items-center gap-2">
        <span className={coverImage ? "text-white/80" : "text-champagne"}>♥</span>
        <p
          className={`font-serif text-3xl md:text-4xl ${
            coverImage ? "text-white" : "text-champagne"
          }`}
        >
          {first} &amp; {second}
        </p>
      </div>

      <button
        onClick={handleOpen}
        className={`group mt-4 flex flex-col items-center gap-3 ${
          coverImage ? "text-white" : "text-ink"
        }`}
      >
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-current">
          <span className="absolute inset-0 animate-ping rounded-full border border-current opacity-40" />
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M4 6h16v12H4z" />
            <path d="M4 7l8 6 8-6" />
          </svg>
        </span>
        <span className="font-sans text-sm uppercase tracking-[0.3em]">
          Chạm để mở thiệp
        </span>
      </button>
    </div>
  );
}
