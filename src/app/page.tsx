import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CinematicHero } from "@/components/ui/cinematic-hero";
import Problem from "@/components/sections/Problem";
import AppTour from "@/components/sections/AppTour";
import Journeys from "@/components/sections/Journeys";
import HowItWorks from "@/components/sections/HowItWorks";
import Vision from "@/components/sections/Vision";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-r4l-surface2 overflow-x-hidden">
      <Navbar />
      <CinematicHero />
      <Problem />
      <AppTour />
      <Journeys />
      <HowItWorks />
      <Vision />
      <CallToAction />
      <Footer />
    </main>
  );
}
