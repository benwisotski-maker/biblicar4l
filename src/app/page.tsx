import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import TheApp from "@/components/sections/TheApp";
import Journeys from "@/components/sections/Journeys";
import HowItWorks from "@/components/sections/HowItWorks";
import Vision from "@/components/sections/Vision";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-r4l-surface2">
      <Navbar />
      <Hero />
      <Problem />
      <TheApp />
      <Journeys />
      <HowItWorks />
      <Vision />
      <CallToAction />
      <Footer />
    </main>
  );
}
