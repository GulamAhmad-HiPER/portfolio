// import {  useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skill from "./pages/Skills/Skill";

function App() {
  return (
    <>
      <Home />
      <Skill />
      <Projects />
      <Menu />
    </>
  );
}

export default App;
