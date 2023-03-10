import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Quote = () => {
  return (
    <>
      <Header />
      <div className="quote">
        <div className="quote-text">
          <h1>Quote Form</h1>
        </div>
        <div class="breadcrumb-wrapper-inner text-center">
          <span>
            <Link title="Go to My Home Page." to="/" class="home">
              <i class="fa-solid fa-house "></i>
            </Link>
          </span>
          <span class="themestek-bread-sep"> &nbsp; → &nbsp;</span>
          <span>
            <span class="post post-page current-item">Quote Form</span>
          </span>
        </div>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="request-quote">
              <p>REQUEST A QUOTE</p>
              <h1>
                Getting Movers and Packers <br /> Quotes is Easy
              </h1>
            </div>

            <form action="" method="post">
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Email Address"
                      name="email"
                      id="email"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Moving From"
                      name="mfrom"
                      id="mfrom"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Moving To"
                      name="mto"
                      id="mto"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Transport Type"
                      name="ttype"
                      class="form-control"
                      id="ttype"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <input
                      type="date"
                      placeholder="Name"
                      name="date"
                      id="date"
                      required
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="col-lg-12">
                  <textarea
                    className="form-control"
                    id="your-message"
                    name="your-message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div>
                <b type="button" id="" class="send-btn">
                  Send Message
                </b>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div>
              <div className="quote-img">
                <img src="images/Quote-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <div className="row">
          <div className="col-sm hover-text">
            <div className="hover-element">
              <img src="images/Client-01.png" alt="" />
            </div>
            <div className="alert-box">
              <p>Client 05</p>
            </div>
          </div>
          <div className="col-sm hover-text">
            <div className="hover-element">
              <img src="images/Client-01.png" alt="" />
            </div>
            <div className="alert-box">
              <p>Client 04</p>
            </div>
          </div>
          <div className="col-sm hover-text">
            <div className="hover-element">
              <img src="images/Client-01.png" alt="" />
            </div>
            <div className="alert-box">
              <p>Client 03</p>
            </div>
          </div>
          <div className="col-sm hover-text">
            <div className="hover-element">
              <img src="images/Client-01.png" alt="" />
            </div>
            <div className="alert-box">
              <p>Client 02</p>
            </div>
          </div>
          <div className="col-sm hover-text">
            <div className="hover-element">
              <img src="images/Client-01.png" alt="" />
            </div>
            <div className="alert-box">
              <p>Client 01</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quote;
