import { useEffect, useState } from "react";

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative w-full h-screen text-white"
      style={{
        backgroundImage: "url('/images/slide (1).jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        transform: `translateY(${scrollY * 0.3}px)`, 
      }}
    >
      <main className="space-y-1 mt-10 py-4 px-10 sm:items-start rounded-xl backdrop-blur-md w-full">
        <h1 className="text-2xl font-bold">Hello!</h1>
        <p className="text-2xl font-bold">I Am Abdul Momoh.</p>
        <div>
          <p className="text-xs font-sans text-left">
            I'm a Web Developer with extensive experience for over 3 years. My expertise is to create, design websites, build software applications, and more...
          </p>
          <button className="border-2 p-2 mt-4 rounded-3xl hover:bg-gray-300 transition-colors duration-300">
            <a>See Portfolio</a>
          </button>
        </div>
      </main>
    </section>
  );
};

export default ParallaxSection;