import Reveal from "./Reveal";

// Section chữ lớn điện ảnh + câu thơ tình (phong cách cinelove)
export default function Quote({ data, tone = "light" }) {
  if (!data) return null;
  const dark = tone === "dark";

  return (
    <section
      className={`relative overflow-hidden px-6 py-24 md:py-32 ${
        dark ? "bg-ink text-cream" : "bg-cream text-ink"
      }`}
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="flex flex-col items-center gap-1 leading-none">
            {data.big?.map((word, i) => (
              <span
                key={i}
                className={`font-script text-5xl md:text-7xl ${
                  i === 1 ? "text-gold" : dark ? "text-blush" : "text-rosegold"
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="divider my-8">
            <span className="text-gold">♥</span>
          </div>
          {data.vi ? (
            <p className="mx-auto max-w-2xl font-serif text-xl italic leading-relaxed md:text-2xl">
              “{data.vi}”
            </p>
          ) : null}
          {data.en ? (
            <p
              className={`mx-auto mt-4 max-w-xl font-sans text-sm tracking-wide ${
                dark ? "text-cream/60" : "text-ink/50"
              }`}
            >
              {data.en}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
