"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tự động cuộn trang chậm rãi sau khi mở thiệp.
 * - Bắt đầu khi nhận sự kiện "invitation:open".
 * - Người dùng có thể tạm dừng / tiếp tục bằng nút nổi.
 * - Tự dừng nếu người dùng tự cuộn (wheel / touch) hoặc khi tới cuối trang.
 *
 * Props:
 *  - speed: số pixel cuộn mỗi giây (mặc định 45).
 *  - startDelay: thời gian chờ trước khi bắt đầu cuộn, tính bằng ms (mặc định 2500).
 */
export default function AutoScroll({ speed = 45, startDelay = 2500 }) {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  const accRef = useRef(0);

  // Bắt đầu sau khi mở thiệp
  useEffect(() => {
    let timer;
    const onOpen = () => {
      setVisible(true);
      timer = setTimeout(() => setActive(true), startDelay);
    };
    window.addEventListener("invitation:open", onOpen);
    return () => {
      window.removeEventListener("invitation:open", onOpen);
      clearTimeout(timer);
    };
  }, [startDelay]);

  // Vòng lặp cuộn
  useEffect(() => {
    if (!active) return;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setActive(false);
      return;
    }

    const step = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      accRef.current += speed * dt;
      const whole = Math.floor(accRef.current);
      if (whole >= 1) {
        accRef.current -= whole;
        window.scrollBy(0, whole);
      }

      const reachedEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (reachedEnd) {
        setActive(false);
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [active, speed]);

  // Dừng khi người dùng tự tương tác cuộn
  useEffect(() => {
    if (!active) return;
    const stop = () => setActive(false);
    const opts = { passive: true };
    window.addEventListener("wheel", stop, opts);
    window.addEventListener("touchstart", stop, opts);
    window.addEventListener("keydown", stop);
    return () => {
      window.removeEventListener("wheel", stop, opts);
      window.removeEventListener("touchstart", stop, opts);
      window.removeEventListener("keydown", stop);
    };
  }, [active]);

  if (!visible) return null;

  return (
    <button
      onClick={() => {
        lastTsRef.current = null;
        setActive((v) => !v);
      }}
      aria-label={active ? "Tạm dừng tự cuộn" : "Tự động cuộn"}
      className="fixed bottom-5 right-20 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-rosegold text-white shadow-lg transition hover:bg-rosegold/90"
    >
      {active ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4l-1.4 1.4L16.2 11H4v2h12.2l-5.6 5.6L12 20l8-8z" transform="rotate(90 12 12)" />
        </svg>
      )}
    </button>
  );
}
