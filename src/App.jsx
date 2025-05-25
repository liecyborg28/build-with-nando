// style for carousel
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import "./App.css";
import { HeaderSimple } from "./components/HeaderSimple/HeaderSimple";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="container">
      <HeaderSimple />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
