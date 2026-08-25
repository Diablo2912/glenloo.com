import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      
      <Timeline />

      <Projects/>

      <Contact/>
    </>
  );
}

export default App;