import { Route, Routes } from "react-router";
import "./App.scss";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Project from "./component/Project";
import About from "./component/About";
import Contact from "./component/Contact";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";


function App() {
  
  return (
    <div className="App" id="home">
       
       <input id="darkMode" type="checkbox" className="dark-mode-check" />
      <div className="wrapper">
      <Hero />
      <Skills />
      <Project />
      <About />
      <Contact />
      <Footer />
        {/* <!-- dark mode toggler --> */}
        <ToastContainer />
      </div>
     
    </div>
  );
}

export default App;
