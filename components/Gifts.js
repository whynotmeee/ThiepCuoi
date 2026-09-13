"use client";

import { useState } from "react";
import config from "@/data/config";
import Reveal from "./Reveal";

// Tạo URL mã QR VietQR từ mã BIN ngân hàng + số tài khoản.
// Nếu người dùng đã có sẵn ảnh QR (g.qr) thì ưu tiên dùng ảnh đó.
function getQrSrc(g) {
  if (g.qr) return g.qr;
  if (g.bankBin && g.accountNumber) {
    const params = new URLSearchParams();
    if (g.accountName) params.set("accountName", g.accountName);
    const query = params.toString();
    return `https://img.vietqr.io/image/${g.bankBin}-${g.accountNumber}-compact2.png${
      query ? `?${query}` : ""
    }`;
  }
  return "";
}

export default function Gifts() {
  const { gifts } = config;
  const [active, setActive] = useState(null); // index hộp quà đang mở

  if (!gifts?.length) return null;

  const current = active != null ? gifts[active] : null;
  const qrSrc = current ? getQrSrc(current) : "";

  const close = () => setActive(null);

  return (
    <section className="bg-sage/10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 animate-wobble items-center justify-center rounded-2xl bg-champagne/15 text-3xl text-champagne">
            🎁
          </div>
          <p className="font-serif text-2xl text-ink">Hộp quà cưới</p>
          <div className="divider my-5">
            <span className="font-serif text-gold">♥</span>
          </div>
          <p className="mx-auto max-w-xl font-serif text-lg text-ink/70">
            Sự hiện diện của bạn là món quà quý giá nhất. Nếu muốn gửi lời chúc
            qua chuyển khoản, hãy chạm vào hộp quà để nhận mã QR.
          </p>
        </Reveal>

        {/* Chỉ hiện các hộp quà, KHÔNG lộ số tài khoản */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {gifts.map((g, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className="w-full max-w-sm"
            >
              <button
                onClick={() => setActive(i)}
                className="group block w-full rounded-3xl bg-white/80 p-8 text-center shadow-sm ring-1 ring-rosegold/10 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blush to-champagne/20 text-4xl transition group-hover:scale-110">
                  🎁
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-rosegold">
                  {g.owner}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-rosegold px-6 py-2 font-sans text-sm text-white transition group-hover:bg-rosegold/90">
                  Chạm để nhận mã QR
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Popup hiển thị mã QR */}
      {current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Đóng"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink/60 transition hover:bg-ink/10"
            >
              ✕
            </button>

            <h3 className="font-serif text-2xl font-semibold text-rosegold">
              {current.owner}
            </h3>
            <p className="mt-1 font-sans text-sm uppercase tracking-wider text-sage">
              {current.bank}
            </p>

            {qrSrc ? (
              <div className="mx-auto mt-5 w-64 overflow-hidden rounded-2xl bg-white p-3 ring-1 ring-rosegold/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrSrc}
                  alt={`Mã QR chuyển khoản ${current.owner}`}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <p className="mt-5 font-sans text-sm text-ink/50">
                (Chưa cấu hình mã QR)
              </p>
            )}

            <p className="mt-4 font-sans text-sm text-ink/50">
              Quét mã QR để gửi lời chúc mừng
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
