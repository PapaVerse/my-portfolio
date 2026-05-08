import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Experience from "@/src/components/Experience"; // 1. Add this import
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience /> {/* 2. Place it here between About and Projects */}
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}