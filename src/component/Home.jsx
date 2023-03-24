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

      <div>
        <div className="back-red"></div>
        {/* <div>
          <div className="hero-slide">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/banner-01.jpg" alt="" id="your-image" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="images/banner-01.jpg" alt="" id="your-image" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                  <div className="slide-btn">
                    <button
                      className="carousel-control-prev "
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon btn1 text-dark"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next btn2"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
      <script type="text/javascript" src="./Script.js"></script>
    </>
  );
};

export default Home;
