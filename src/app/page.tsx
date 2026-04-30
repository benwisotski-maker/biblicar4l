import GooeyDock from "@/components/ui/GooeyDock";
import { CinematicHero } from "@/components/ui/cinematic-hero";
import Problem from "@/components/sections/Problem";
import AppTour from "@/components/sections/AppTour";
import Journeys from "@/components/sections/Journeys";
import HowItWorks from "@/components/sections/HowItWorks";
import Vision from "@/components/sections/Vision";

export default function Home() {
  return (
    <main className="min-h-screen bg-r4l-surface2 overflow-x-hidden">
      <GooeyDock />
      <CinematicHero id="hero" />
      <Problem />
      <AppTour />
      <Journeys />
      <HowItWorks />
      <Vision />
    </main>
  );
}
