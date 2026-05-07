import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact"; // 1. Ensure this import exists

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact /> {/* 2. This must be here to show on the site */}
    </main>
  );
}