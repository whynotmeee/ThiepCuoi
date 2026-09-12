"use client";

import { useState } from "react";
import config from "@/data/config";
import Reveal from "./Reveal";

export default function Gifts() {
  const { gifts } = config;
  const [copied, setCopied] = useState(null);
  if (!gifts?.length) return null;

  const copy = (text, key) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    });
  };

  return (
    <section className="bg-sage/10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-rosegold">
            Mừng cưới
          </p>
          <div className="divider my-5">
            <span className="font-serif text-gold">♥</span>
          </div>
          <p className="mx-auto max-w-xl font-serif text-lg text-ink/70">
            Sự hiện diện của bạn là món quà quý giá nhất. Nếu muốn gửi lời chúc
            qua chuyển khoản, đây là thông tin của chúng tôi.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {gifts.map((g, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="rounded-3xl bg-white/80 p-7 text-center shadow-sm ring-1 ring-rosegold/10">
                <h3 className="font-serif text-2xl font-semibold text-rosegold">
                  {g.owner}
                </h3>
                <p className="mt-3 font-sans text-sm uppercase tracking-wider text-sage">
                  {g.bank}
                </p>
                <p className="mt-2 font-serif text-2xl tracking-wider text-ink tabular-nums">
                  {g.accountNumber}
                </p>
                <p className="mt-1 font-sans text-sm text-ink/60">
                  {g.accountName}
                </p>
                <button
                  onClick={() => copy(g.accountNumber, i)}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-rosegold px-6 py-2 font-sans text-sm text-white transition hover:bg-rosegold/90"
                >
                  {copied === i ? "Đã sao chép ✓" : "Sao chép số TK"}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
