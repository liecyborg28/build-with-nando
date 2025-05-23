// style for carousel
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import "./App.css";
import { HeaderSimple } from "./components/HeaderSimple/HeaderSimple";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="container">
      <HeaderSimple />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
