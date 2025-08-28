import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Aboutme />
      <Projects/>
      <Contact/>
    </div>
  );
}
