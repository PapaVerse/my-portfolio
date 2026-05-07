import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects"; // New Import

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen selection:bg-[#7fffd4] selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Projects /> {/* New Section Added Here */}
      
      {/* Note: If you haven't created the Contact component yet, 
         you can comment it out or add it later.
      */}
      {/* <Contact /> */}
    </main>
  );
}