import FallingPetals from "@/components/FallingPetals";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Gifts from "@/components/Gifts";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="relative">
      <FallingPetals />
      <div className="relative z-10">
        <Hero />
        <Intro />
        <Countdown />
        <Story />
        <Events />
        <Gallery />
        <Gifts />
        <Rsvp />
        <Footer />
      </div>
      <MusicPlayer />
    </main>
  );
}
