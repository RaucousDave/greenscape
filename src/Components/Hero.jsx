// Hero.jsx
import { useEffect, useRef } from "react";
import { LuLeaf, LuDroplet, LuSun } from "react-icons/lu";
import { gsap } from "gsap";

function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 3.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div>
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center bg-[var(--soft-green)] px-6"
      >
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-green-600 mb-6">
            Breathe Life into Your Space
          </h1>

          <p className="text-lg md:text-xl text-[var(--deep-green)] mb-8">
            Discover modern, minimal indoor plants that elevate your home’s
            vibe, clean your air, and connect you with nature.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-[var(--deep-green)] hover:bg-[var(--hover-green)] text-[var(--white)] px-6 py-3 rounded-xl font-medium transition duration-300 hover:text-lime-500">
              Explore Greenscape
            </button>
            <button className="border border-[var(--deep-green)] text-[var(--deep-green)] hover:bg-[var(--deep-green)] hover:text-lime-500 px-6 py-3 rounded-xl font-medium transition duration-300">
              Learn More
            </button>
          </div>

          <div className="mt-10 flex justify-center gap-6 text-[var(--deep-green)] text-3xl">
            <LuLeaf className="hover:text-green-600 transition" />
            <LuDroplet className="hover:text-green-600 transition" />
            <LuSun className="hover:text-green-600 transition" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
