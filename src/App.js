import { Route, Routes } from "react-router";
import "./App.scss";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Project from "./component/Project";
import About from "./component/About";
import Contact from "./component/Contact";
import { BsCircleHalf } from "@react-icons/all-files/bs/BsCircleHalf";

function App() {
  return (
    <div className="App">
       <input id="darkMode" type="checkbox" className="dark-mode-check" />
      <div className="wrapper">
      <Hero />
      <Skills />
      <Project />
      <About />
      
    
        {/* <!-- dark mode toggler --> */}
        
      </div>
    </div>
  );
}

export default App;
