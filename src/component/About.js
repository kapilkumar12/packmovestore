import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />

      <div className="quote">
        <div className="quote-text">
          <h1>About Us</h1>
        </div>
        <div class="breadcrumb-wrapper-inner text-center">
          <span>
            <Link title="Go to My Home Page." to="/" class="home">
              <i class="fa-solid fa-house "></i>
            </Link>
          </span>
          <span class="themestek-bread-sep"> &nbsp; → &nbsp;</span>
          <span>
            <span class="post post-page current-item">About Us</span>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
