import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";

export default function LandingPage() {
  return (
    <main className="bg-black dark">
      <Header />
      <Hero />
      <Features />
      <Workflow />
    </main>
  );
}
