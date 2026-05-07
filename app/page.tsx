import Hero from "@/src/components/Hero";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <img
  src="/profile.jpg"
  alt="profile"
  className="w-40 h-40 rounded-full mx-auto"
/>
      <Hero />
    </main>
  );
}
