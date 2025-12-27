import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Coursework from "@/components/Coursework";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Coursework />
      <Contact />
    </main>
  );
}
