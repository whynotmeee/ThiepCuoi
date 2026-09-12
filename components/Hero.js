import config from "@/data/config";

export default function Hero() {
  const { groom, bride, lunarDate } = config;
  const date = new Date(config.weddingDate);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blush via-cream to-cream px-6 text-center">
      <div className="absolute inset-0 paper opacity-60" />

      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-4 font-sans text-sm uppercase tracking-[0.4em] text-rosegold animate-fadeUp">
          Save the date
        </p>

        <h2 className="font-script text-3xl text-sage animate-fadeUp" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Trân trọng kính mời
        </h2>

        <div className="my-6 flex items-center gap-4 md:gap-8">
          <h1
            className="font-script text-5xl text-rosegold md:text-7xl animate-fadeUp"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            {groom.name}
          </h1>
          <span
            className="font-script text-4xl text-gold md:text-6xl animate-fadeUp"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            &amp;
          </span>
          <h1
            className="font-script text-5xl text-rosegold md:text-7xl animate-fadeUp"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            {bride.name}
          </h1>
        </div>

        <div
          className="divider my-4 w-full max-w-xs animate-fadeUp"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <span className="font-serif text-gold">♥</span>
        </div>

        <p
          className="font-serif text-2xl tracking-widest text-ink md:text-3xl animate-fadeUp"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          {dd} . {mm} . {yyyy}
        </p>
        {lunarDate ? (
          <p
            className="mt-2 font-sans text-sm text-ink/60 animate-fadeUp"
            style={{ animationDelay: "1s", opacity: 0 }}
          >
            (Tức {lunarDate})
          </p>
        ) : null}
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-rosegold">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
