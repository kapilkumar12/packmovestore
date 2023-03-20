import React, { useEffect } from "react";
import Footer from "./Footer";
// import { useCountUp } from "react-countup";
import { Link } from "react-router-dom";
import HeaderSecond from "./HeaderSecond";
import CountUp from "./CountUp";

const About = () => {
  useEffect(() => {
    document.title = "Pack Move Store - About Us";
  }, []);

  // useCountUp({ ref: "counter", end: 750 });
  // useCountUp({ ref: "counter1", end: 870 });
  // useCountUp({ ref: "counter2", end: 320 });
  return (
    <>
      <HeaderSecond />

      <div className="quote">
        <div className="quote-text">
          <h1>About Us</h1>
        </div>
        <div className="breadcrumb-wrapper-inner text-center">
          <span>
            <Link title="Go to My Home Page." to="/" className="home">
              <i className="fa-solid fa-house "></i>
            </Link>
          </span>
          <span className="themestek-bread-sep"> &nbsp; → &nbsp;</span>
          <span>
            <span className="post post-page current-item">About Us</span>
          </span>
        </div>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-6 about-fdiv">
            <div>
              <h4>OUR COMPANY</h4>
              <h2>We are a India based top Mover company</h2>
            </div>
            <p>
              We are a prominent service provider who is known for providing
              top-class moving and rental services in the market. Whether you
              are looking for storage or rental services this is the right
              platform for you to attain any type of service as per your needs.
            </p>
            <div>
              <img src="images/img-01-584x300.jpg" alt="" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-6 about-sdiv">
            <div>
              <img src="images/img-02-584x400.jpg" alt="" />
            </div>
            <div>
              <h5>What We do</h5>
            </div>
            <div className="row">
              <div className="col-lg-6 about-seconds">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>These Happy Days are yours</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>Why do we always come.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>There ain't nothin' wrong with .</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 about-seconds">
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>These Happy Days are yours</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>Why do we always come.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span>There ain't nothin' wrong with .</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container counter-number">
        <div>
          <h4>FUN FACTS</h4>
          <h2>Counters Numbers Speak</h2>
        </div>
        <div className="row p-5">
          <div className="col-lg-4 counter-number-truck counterf">
            <div>
              <i className="fa-solid fa-truck"></i>
              <div className="counter-container">
                <div className="counter" id="counter">
                  <CountUp end={750} start={0} timer={100} />
                </div>
                <span>
                  Customer Choose <br />
                  Company Movers
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 counter-number-truck counterf">
            <div>
              <i className="fa-solid fa-box"></i>
              <div className="counter-container">
                <div className="counter">
                  <CountUp end={870} start={0} timer={100} />
                </div>
                <span className="text-center">
                  Boxes are Successfully <br /> Moved
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 counter-number-truck">
            <div>
              <i className="fa-solid fa-thumbs-up"></i>
              <div className="counter-container">
                <div className="counter">
                  <CountUp end={320} start={0} timer={100} />
                </div>
                <span className="text-center">
                  Customers are Satisfied <br /> with our Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about-bg-image">
        <div className="row about-row">
          <div className="col-md-6 about-bg-fdiv">
            <div className="about-bg-fdiv-content">
              <div>
                <h4>OUR CLIENTS SAY</h4>
                <h2>
                  We Love Our Clients <br /> And They Love Us
                </h2>
              </div>
              <div>
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <blockquote className="themestek-testimonial-text">
                        <div className="themestek-testimonial-text-flex">
                          <div>
                            <i className="fa-solid fa-quote-right"></i>
                          </div>

                          <span>
                            Long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at it's layout. The point of using Lorem
                            Ipsum
                          </span>
                        </div>

                        <div className="client-name">
                          <h3>Victoria Porter</h3>
                          <span>Customer</span>
                        </div>
                      </blockquote>
                    </div>
                    <div className="carousel-item">
                      <blockquote className="themestek-testimonial-text">
                        <div className="themestek-testimonial-text-flex">
                          <div>
                            <i className="fa-solid fa-quote-right"></i>
                          </div>

                          <span>
                            Long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at it's layout. The point of using Lorem
                            Ipsum
                          </span>
                        </div>

                        <div className="client-name">
                          <h3>John Smith</h3>
                          <span>Building Owner </span>
                        </div>
                      </blockquote>
                    </div>
                    <div className="carousel-item">
                      <blockquote className="themestek-testimonial-text">
                        <div className="themestek-testimonial-text-flex">
                          <div>
                            <i className="fa-solid fa-quote-right"></i>
                          </div>

                          <span>
                            Long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at it's layout. The point of using Lorem
                            Ipsum
                          </span>
                        </div>

                        <div className="client-name">
                          <h3>Allien John</h3>
                          <span>Customer</span>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="wrapper">
              <div className="video-main">
                <div className="promo-video">
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                  </div>
                </div>
                <Link
                  href=""
                  className="video video-popup mfp-iframe"
                  data-lity
                >
                  <i className="fa fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container team">
        <div>
          <h4>OUR TEAM</h4>
          <h1>Meet our Professionals</h1>
        </div>
        <div className="row">
          <div className="col-lg-3 tbox">
            <span className="team-img">
              <img src="images/img-04-600x700 (1).jpg" alt="" />
            </span>
            <div>
              <h4>
                <Link to="">Micheal Wagou</Link>
              </h4>
            </div>
            <div>
              <p>Micheal Wagou</p>
            </div>
            <div>
              <div className="about-icon">
                <li>
                  <Link to="">
                    <i className="fa-brands fa-facebook-f "></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-google-plus-g"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="col-lg-3 tbox">
            <span className="team-img">
              <img src="images/img-04-600x700 (1).jpg" alt="" />
            </span>
            <div>
              <h4>
                <Link to="">Micheal Wagou</Link>
              </h4>
            </div>
            <div>
              <p>Micheal Wagou</p>
            </div>
            <div>
              <div className="about-icon">
                <li>
                  <Link to="">
                    <i className="fa-brands fa-facebook-f "></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-google-plus-g"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="col-lg-3 tbox">
            <span className="team-img">
              <img src="images/img-04-600x700 (1).jpg" alt="" />
            </span>
            <div>
              <h4>
                <Link to="">Micheal Wagou</Link>
              </h4>
            </div>
            <div>
              <p>Micheal Wagou</p>
            </div>
            <div>
              <div className="about-icon">
                <li>
                  <Link to="">
                    <i className="fa-brands fa-facebook-f "></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-google-plus-g"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="col-lg-3 tbox">
            <span className="team-img">
              <img src="images/img-04-600x700 (1).jpg" alt="" />
            </span>
            <div>
              <h4>
                <Link to="">Micheal Wagou</Link>
              </h4>
            </div>
            <div>
              <p>Micheal Wagou</p>
            </div>
            <div>
              <div className="about-icon">
                <li>
                  <Link to="">
                    <i className="fa-brands fa-facebook-f "></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-google-plus-g"></i>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
