import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090D16] text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
