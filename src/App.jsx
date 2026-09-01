import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import  TechStack from "./components/TechStack";
import Awards from "./components/Awards";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      
      <Timeline />

      <Projects/>

      <TechStack/>

      <Awards/>

      <Contact/>

      <Footer/>
    </>
  );
}

export default App;