import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quote from "./component/Quote";
import Projects from "./component/Projects";
import ContactUs from "./component/ContactUs";
import About from "./component/About";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Router>
        {/* <Header tittle="Malia Contactor" aboutText="Malia Contactor" /> */}

        {/* <div className="container-fluid"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="scroll-top">
          <b
            className={`scroll-to-top ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
          >
            <i className="fas fa-arrow-up"></i>
          </b>
        </div>
      </Router>
    </>
  );
}

export default App;
