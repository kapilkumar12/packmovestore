import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./style.css";

const Home = () => {
  useEffect(() => {
    document.title = "Pack Move Store - Home";
  }, []);
  return (
    <>
      <Header />
      {/* 
      <div>
        <div className="back-red"></div>
        <div>
          <div className="hero-slide">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="images/banner-01.jpg" alt="" id="your-image" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="images/banner-01.jpg" alt="" id="your-image" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-btn">
        <button
          class="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon btn1 text-dark"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next btn2"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
      <Footer />
    </>
  );
};

export default Home;
