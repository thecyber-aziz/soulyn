
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Marquee from "../components/Marquee";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
   
      <Hero />
      <About />
      <Marquee />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer /> 
    </>
  );
};

export default Home;