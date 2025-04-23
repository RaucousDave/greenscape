import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import About from "./Components/About";
import Products from "./Components/Products";
import Cta from "./Components/Cta";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Products />
      <Cta />
    </div>
  );
}

export default App;
