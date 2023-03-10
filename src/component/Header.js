import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
// import $ from "jquery";
const Header = () => {
  const location = useLocation();
  function toggleContent() {
    var content = document.getElementById("content");
    var icon = document.getElementById("toggleIcon");

    if (content.style.display === "none") {
      content.style.display = "block";
      icon.innerHTML = "&#x25B2;"; // Change icon to upward arrow
    } else {
      content.style.display = "none";
      icon.innerHTML = "&#x25BC;"; // Change icon back to downward arrow
    }
  }

  function toggleMenu() {
    var content = document.getElementById("menucontent");
    var icon = document.getElementById("menutoggleIcon");

    if (content.style.display === "none") {
      content.style.display = "block";
      icon.innerHTML = "&#x2716;"; // Change icon to upward arrow
    } else {
      content.style.display = "none";
      icon.innerHTML = "&#x2630;"; // Change icon back to downward arrow
    }
  }

  return (
    <>
      <div className="container-fluid f-head">
        <div className="row">
          <div className="col-lg-4 logo ">
            <div>
              <img src="images/logo-white-dark.png" alt="" />
            </div>
          </div>
          <div className="col-lg-8 ">
            <div className="nav">
              <ul>
                <li>
                  <Link
                    className={` ${location.pathname === "/" ? "active" : ""}`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className={` ${
                      location.pathname === "/quote" ? "active" : ""
                    }`}
                    to="/quote"
                  >
                    Free Quote
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      location.pathname === "/projects" ? "active" : ""
                    }`}
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    className={` ${
                      location.pathname === "/services" ? "active" : ""
                    }`}
                    to="/services"
                  >
                    Services
                  </Link>

                  <div className="dropdown-content mt-2">
                    <Link to="/pet-relocation">Pet Relocation</Link>

                    <Link to="/moving-house">Moving House</Link>

                    <Link to="/office-relocation">Office Relocation</Link>

                    <Link to="/rental-assistance">Rental Assistance</Link>

                    <Link to="/service-apartments">Service Apartments</Link>
                  </div>
                </li>
                <li>
                  <Link
                    className={` ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                    to="/contact"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    to="/about"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-flickr"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
                <li className="search">
                  <Link
                    to=""
                    className="search-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    <i className="fa-solid fa-magnifying-glass "></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* second header start */}
      <div className="container-fluid navbar2">
        <div className="second-head">
          <div className="second-navbar">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="second-navbar">
            <div className="second-nav-icon">
              <a
                href=""
                className="second-nav-icon-search"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                <i className="fa-solid fa-magnifying-glass "></i>
              </a>

              <a onClick={toggleMenu} className="toggleicon">
                <span id="menutoggleIcon">&#x2630;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5" id="menucontent">
        <div className="second-nav" id="second-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <hr />
            <li>
              <Link to="/quote">Free Quote</Link>
            </li>
            <hr />
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <hr />
            <li className="services">
              <Link to="/services">Services</Link>
              <div>
                <a onClick={toggleContent} className="toggleicon">
                  <span id="toggleIcon">&#x25BC;</span>
                </a>
                <div id="content">
                  <div>
                    <hr />
                    <Link to="/pet-relocation">Pet Relocation</Link>
                    <hr />
                    <Link to="/moving-house">Moving House</Link>
                    <hr />
                    <Link to="/office-relocation">Office Relocation</Link>
                    <hr />
                    <Link to="/rental-assistance">Rental Assistance</Link>
                    <hr />
                    <Link to="/service-apartments">Service Apartments</Link>
                    <hr />
                  </div>
                </div>
              </div>
            </li>
            <hr />
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <hr />
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <hr />
          </ul>
        </div>
      </div>

      {/* second header end */}

      {/* third header  start*/}
      <div className="container-fluid navbar3">
        <div className="row">
          <div className="col-lg-4 logo3">
            <div>
              <img src="images/logo.png" alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="nav">
              <ul>
                <li>
                  <Link
                    className={` ${location.pathname === "/" ? "active" : ""}`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className={` ${
                      location.pathname === "/quote" ? "active" : ""
                    }`}
                    to="/quote"
                  >
                    Free Quote
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      location.pathname === "/projects" ? "active" : ""
                    }`}
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    className={` ${
                      location.pathname === "/services" ? "active" : ""
                    }`}
                    to="/services"
                  >
                    Services
                  </Link>

                  <div className="dropdown-content mt-2">
                    <Link to="/pet-relocation">Pet Relocation</Link>

                    <Link to="/moving-house">Moving House</Link>

                    <Link to="/office-relocation">Office Relocation</Link>

                    <Link to="/rental-assistance">Rental Assistance</Link>

                    <Link to="/service-apartments">Service Apartments</Link>
                  </div>
                </li>
                <li>
                  <Link
                    className={` ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                    to="/contact"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    to="/about"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-flickr"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
                <li className="search">
                  <Link
                    to=""
                    className="search-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    <i className="fa-solid fa-magnifying-glass "></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* third header end */}

      {/*search  modal  start*/}

      <div className="modal" id="myModal">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div class="modal-head">
              <div className="cancel-icon">
                <i class="fa-solid fa-xmark" data-bs-dismiss="modal"></i>
              </div>
            </div>

            <div className="modal-body text-center">
              <div>
                <div className="modal-img">
                  <img src="images/logo-white.png" alt="" />
                </div>
                <div className="text-center">
                  <div class="input-box">
                    {/* <i className="fa-solid fa-magnifying-glass "></i> */}
                    <input
                      type="text"
                      placeholder="Type Word Then Press Enter"
                    />

                    <i className="button fa-solid fa-magnifying-glass "></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
