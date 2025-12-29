import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Coursework from "@/components/Coursework";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <Coursework />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </main>
  );
}
