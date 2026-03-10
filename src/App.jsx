import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageGradient from "./components/PageGradient";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
<div className="relative min-h-screen text-white">    
    <PageGradient />
    <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}