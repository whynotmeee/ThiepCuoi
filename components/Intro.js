import config from "@/data/config";
import Reveal from "./Reveal";

export default function Intro() {
  const { groom, bride, intro } = config;

  return (
    <section className="paper px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-rosegold">
            Lời ngỏ
          </p>
          <div className="divider my-5">
            <span className="font-serif text-gold">❦</span>
          </div>
          <p className="mx-auto max-w-2xl font-serif text-xl leading-relaxed text-ink/80 md:text-2xl">
            {intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="rounded-3xl bg-blush/40 p-8">
              <p className="font-sans text-xs uppercase tracking-widest text-sage">
                Nhà trai
              </p>
              <h3 className="mt-2 font-script text-4xl text-rosegold">
                {groom.name}
              </h3>
              <p className="mt-4 font-serif text-lg text-ink/70">{groom.father}</p>
              <p className="font-serif text-lg text-ink/70">{groom.mother}</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-3xl bg-blush/40 p-8">
              <p className="font-sans text-xs uppercase tracking-widest text-sage">
                Nhà gái
              </p>
              <h3 className="mt-2 font-script text-4xl text-rosegold">
                {bride.name}
              </h3>
              <p className="mt-4 font-serif text-lg text-ink/70">{bride.father}</p>
              <p className="font-serif text-lg text-ink/70">{bride.mother}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
