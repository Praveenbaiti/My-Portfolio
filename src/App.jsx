import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Router>
        <div className="main-container">
          <NavBar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/internship" element={<Internship />}/>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
