import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import About from "./Components/About";
import Products from "./Components/Products";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";
import { useRef } from "react";
function App() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      hero: heroRef,
      features: featuresRef,
      about: aboutRef,
      products: productsRef,
    };
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={productsRef}>
        <Products />
      </div>
      <Cta />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
