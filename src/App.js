import "./App.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quote from "./component/Quote";
import Projects from "./component/Projects";
import ContactUs from "./component/ContactUs";
import About from "./component/About";
import GoToTop from "./component/GoToTop";
import { ThemeProvider } from "styled-components";
// import Counter from "./component/Counter";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <>
      {/* <Counter /> */}
      <ThemeProvider theme={theme}>
        <GoToTop />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
