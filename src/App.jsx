// import {  useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skill from "./pages/Skills/Skill";

function App() {
  return (
    <>
      <Home />
      <Skill />
      <Projects />
      <Contact />
      <Menu />
    </>
  );
}

export default App;
