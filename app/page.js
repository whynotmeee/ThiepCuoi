import FallingPetals from "@/components/FallingPetals";
import Invitation from "@/components/Invitation";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Quote from "@/components/Quote";
import Countdown from "@/components/Countdown";
import Calendar from "@/components/Calendar";
import Story from "@/components/Story";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Gifts from "@/components/Gifts";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import config from "@/data/config";

export default function Home() {
  const quotes = config.quotes || [];

  return (
    <main className="relative">
      <Invitation>
        <FallingPetals />
        <div className="relative z-10">
          <Hero />
          <Intro />
          <Quote data={quotes[0]} tone="light" />
          <Countdown />
          <Calendar />
          <Story />
          <Quote data={quotes[1]} tone="dark" />
          <Events />
          <Gallery />
          <Quote data={quotes[2]} tone="light" />
          <Gifts />
          <Rsvp />
          <Footer />
        </div>
        <MusicPlayer />
      </Invitation>
    </main>
  );
}
