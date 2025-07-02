import { useEffect, useState } from "react";

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full h-screen text-white flex items-center"
      style={{
        backgroundImage: "url('/images/slide (1).jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    >
      <main className="bg-black/50 backdrop-blur-sm rounded-xl px-8 py-6 sm:ml-10 max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Hello!</h1>
        <p className="text-2xl sm:text-3xl font-semibold mb-4">I'm Emmanuel Adeogo.</p>
        <p className="text-sm sm:text-base leading-relaxed text-gray-100">
          A frontend developer focused on building scalable, user-friendly web interfaces and experiences. I specialize in React, design systems, and bringing ideas to life with clean and modern UI.
        </p>
        <button className="mt-6 border-2 border-white text-white px-5 py-2 rounded-3xl hover:bg-white hover:text-black transition duration-300">
          <a href="https://instagram.com/emmanuelokedele">See Portfolio</a>
        </button>
      </main>
    </section>
  );
};

export default ParallaxSection;
