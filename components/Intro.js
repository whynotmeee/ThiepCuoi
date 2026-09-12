import config from "@/data/config";
import Reveal from "./Reveal";

// Lời ngỏ + lời cảm ơn tiếng Anh + tên cô dâu chú rể kèm ảnh
export default function Intro() {
  const { groom, bride, nameOrder, intro, introEn } = config;
  const first = nameOrder === "bride" ? bride : groom;
  const second = nameOrder === "bride" ? groom : bride;

  const lines = (t) => (t || "").split("\n");

  const PersonCard = ({ p }) => (
    <div className="flex flex-col items-center">
      <div className="h-44 w-36 overflow-hidden rounded-2xl bg-gradient-to-br from-blush to-champagne/20 md:h-56 md:w-44">
        {p.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.photo} alt={p.name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl text-champagne/40">
            ♥
          </div>
        )}
      </div>
      <p className="mt-4 font-serif text-3xl text-champagne">{p.name}</p>
      <p className="mt-1 font-sans text-xs uppercase tracking-widest text-ink/50">
        {p.role}
      </p>
    </div>
  );

  return (
    <section className="paper bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <div className="font-serif text-lg leading-relaxed text-ink/80 md:text-xl">
            {lines(intro).map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        </Reveal>

        {introEn ? (
          <Reveal delay={100}>
            <div className="mt-8 font-sans text-sm uppercase leading-relaxed tracking-wide text-champagne">
              {lines(introEn).map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          </Reveal>
        ) : null}

        <div className="divider my-10">
          <span className="text-champagne">♥</span>
        </div>

        <Reveal delay={120}>
          <div className="flex items-center justify-center gap-6 md:gap-12">
            <PersonCard p={first} />
            <span className="font-script text-4xl text-champagne md:text-5xl">&amp;</span>
            <PersonCard p={second} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
