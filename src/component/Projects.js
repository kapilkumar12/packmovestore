import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./style.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="quote">
        <div className="quote-text">
          <h1>Projects Style 1</h1>
        </div>
        <div class="breadcrumb-wrapper-inner text-center">
          <span>
            <Link title="Go to My Home Page." to="/" class="home">
              <i class="fa-solid fa-house "></i>
            </Link>
          </span>
          <span class="themestek-bread-sep"> &nbsp; → &nbsp;</span>
          <span>
            <span class="post post-page current-item">Projects Style 1</span>
          </span>
        </div>
      </div>

      <div className="container p-5">
        <div className="row p-5">
          <div className="col-sm  ">
            <div>
              <div className="office-removel">
                <img src="images/img-03.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Interior</Link>

                <h3>
                  <Link to="">Office Removels</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-sm projects-div">
            <div>
              <div className="office-removel">
                <img src="images/img-02.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Pre Packing</Link>

                <h3>
                  <Link to="">Overseas Moving</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-sm projects-div">
            <div>
              <div className="office-removel">
                <img src="images/img-03.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Moving</Link>

                <h3>
                  <Link to="">Warehousing Solutions</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-sm ">
            <div>
              <div className="office-removel">
                <img src="images/img-02.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Moving</Link>

                <h3>
                  <Link to="">Moving Interstate</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-sm projects-div ">
            <div>
              <div className="office-removel">
                <img src="images/img-03.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Interior</Link>

                <h3>
                  <Link to="">Office Furniture Moving</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-sm projects-div">
            <div>
              <div className="office-removel">
                <img src="images/img-02.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Pre Packing</Link>

                <h3>
                  <Link to="">Living Room</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-sm  ">
            <div>
              <div className="office-removel">
                <img src="images/img-03.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Interior</Link>

                <h3>
                  <Link to="">Beautiful House</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-sm projects-div">
            <div>
              <div className="office-removel">
                <img src="images/img-02.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Moving</Link>

                <h3>
                  <Link to="">Fashion Shop</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-sm projects-div">
            <div>
              <div className="office-removel">
                <img src="images/img-03.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Pre Packing</Link>

                <h3>
                  <Link to="">Surface Cleaning</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-sm ">
            <div>
              <div className="office-removel">
                <img src="images/img-02.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Moving</Link>

                <h3>
                  <Link to="">Residential Movers</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-sm projects-div ">
            <div>
              <div className="office-removel">
                <img src="images/img-03.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Interior</Link>

                <h3>
                  <Link to="">Cultural House</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-sm projects-div">
            <div>
              <div className="office-removel">
                <img src="images/img-02.jpg" alt="" />
              </div>
              <div className="office-removel-text">
                <Link to="">Pre Packing</Link>

                <h3>
                  <Link to="">Organic Synthesis</Link>
                </h3>
              </div>
            </div>
            <div className="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
