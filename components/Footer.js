import config from "@/data/config";

export default function Footer() {
  const { groom, bride, thankYou, hashtag } = config;

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-cream to-blush px-6 py-20 text-center">
      <div className="absolute inset-0 paper opacity-50" />
      <div className="relative z-10">
        <p className="mx-auto max-w-xl font-serif text-xl leading-relaxed text-ink/80">
          {thankYou}
        </p>
        <div className="divider my-8 mx-auto max-w-xs">
          <span className="font-serif text-gold">♥</span>
        </div>
        <h2 className="font-script text-5xl text-rosegold md:text-6xl">
          {groom.name} &amp; {bride.name}
        </h2>
        {hashtag ? (
          <p className="mt-4 font-sans text-sm uppercase tracking-[0.3em] text-sage">
            {hashtag}
          </p>
        ) : null}
      </div>
    </footer>
  );
}
