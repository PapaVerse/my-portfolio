import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer"; // 1. Add this import

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact /> 
      <Footer /> {/* 2. Place it here to show at the bottom of the site */}
    </main>
  );
}