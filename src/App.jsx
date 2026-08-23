import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      
      <Timeline />

      <Projects/>
    </>
  );
}

export default App;