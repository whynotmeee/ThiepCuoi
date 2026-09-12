"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Rsvp() {
  const [form, setForm] = useState({
    name: "",
    attend: "yes",
    guests: "1",
    wish: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lưu tạm vào localStorage (không cần backend).
    // Bạn có thể thay bằng Google Form / API sau này.
    try {
      const key = "rsvp_responses";
      const prev = JSON.parse(localStorage.getItem(key) || "[]");
      prev.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(prev));
    } catch (_) {}
    setSubmitted(true);
  };

  return (
    <section className="paper bg-blush/30 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <Reveal className="text-center">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-rosegold">
            Xác nhận tham dự
          </p>
          <div className="divider my-5">
            <span className="font-serif text-gold">♥</span>
          </div>
          <p className="font-serif text-lg text-ink/70">
            Hãy cho chúng tôi biết bạn có thể đến chung vui nhé!
          </p>
        </Reveal>

        <Reveal delay={100}>
          {submitted ? (
            <div className="mt-8 rounded-3xl bg-white/80 p-10 text-center shadow-sm ring-1 ring-rosegold/10">
              <p className="text-4xl">💌</p>
              <h3 className="mt-4 font-script text-4xl text-rosegold">
                Cảm ơn bạn!
              </h3>
              <p className="mt-2 font-serif text-lg text-ink/70">
                Chúng tôi đã nhận được lời phản hồi của bạn.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5 rounded-3xl bg-white/80 p-8 shadow-sm ring-1 ring-rosegold/10"
            >
              <div>
                <label className="mb-1 block font-sans text-sm text-ink/70">
                  Họ và tên
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  className="w-full rounded-xl border border-rosegold/20 bg-cream px-4 py-3 font-serif text-lg outline-none focus:border-rosegold"
                />
              </div>

              <div>
                <label className="mb-1 block font-sans text-sm text-ink/70">
                  Bạn sẽ tham dự chứ?
                </label>
                <select
                  name="attend"
                  value={form.attend}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-rosegold/20 bg-cream px-4 py-3 font-serif text-lg outline-none focus:border-rosegold"
                >
                  <option value="yes">Có, tôi sẽ đến</option>
                  <option value="no">Rất tiếc, tôi không thể đến</option>
                </select>
              </div>

              {form.attend === "yes" ? (
                <div>
                  <label className="mb-1 block font-sans text-sm text-ink/70">
                    Số người tham dự
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-rosegold/20 bg-cream px-4 py-3 font-serif text-lg outline-none focus:border-rosegold"
                  />
                </div>
              ) : null}

              <div>
                <label className="mb-1 block font-sans text-sm text-ink/70">
                  Lời chúc
                </label>
                <textarea
                  name="wish"
                  value={form.wish}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Gửi lời chúc tới cô dâu chú rể..."
                  className="w-full rounded-xl border border-rosegold/20 bg-cream px-4 py-3 font-serif text-lg outline-none focus:border-rosegold"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-rosegold py-3 font-sans text-base text-white transition hover:bg-rosegold/90"
              >
                Gửi xác nhận
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
