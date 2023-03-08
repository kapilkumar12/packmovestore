import React from "react";
import "./style.css";
// import $ from "jquery";
const Header = () => {
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 logo">
            <div>
              <img src="images/logo-white-dark.png" alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="nav">
              <ul>
                <li>
                  <a href="" className="active">
                    Home
                  </a>
                </li>

                <li>
                  <a href="">Free Quote</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li className="dropdown">
                  <a href="">Services</a>

                  <div className="dropdown-content mt-2">
                    <a href="">Pet Relocation</a>

                    <a href="">Moving House</a>

                    <a href="">Office Relocation</a>

                    <a href="">Rental Assistance</a>

                    <a href="">Service Apartments</a>
                  </div>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-flickr"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="search">
                  <a href="" className="search-icon">
                    <i className="fa-solid fa-magnifying-glass "></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* second header start */}
      <div className="container-fluid">
        <div className="secong-head">
          <div>
            <img src="images/logo.png" alt="" />
          </div>
          <div>
            <i className="fa-solid fa-magnifying-glass "></i>
            <a onClick={toggleMenu} className="toggleicon">
              <span id="menutoggleIcon">&#x2630;</span>
            </a>
          </div>
        </div>
      </div>

      {/* <div>
        <a onClick={toggleContent} className="toggleicon">
          <span id="toggleIcon">&#x25BC;</span>
        </a>
        <div id="content"></div>
      </div> */}

      <div className="container-fluid pt-5" id="menucontent">
        <div className="secomd-nav" id="secomd-nav">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <hr />
            <li>
              <a href="">Free Quote</a>
            </li>
            <hr />
            <li>
              <a href="">Projects</a>
            </li>
            <hr />
            <li className="services">
              <a href="">Services</a>
              <div>
                <a onClick={toggleContent} className="toggleicon">
                  <span id="toggleIcon">&#x25BC;</span>
                </a>
                <div id="content">
                  <div>
                    <hr />
                    <a href="">Pet Relocation</a>
                    <hr />
                    <a href="">Moving House</a>
                    <hr />
                    <a href="">Office Relocation</a>
                    <hr />
                    <a href="">Rental Assistance</a>
                    <hr />
                    <a href="">Service Apartments</a>
                    <hr />
                  </div>
                </div>
              </div>
            </li>
            <hr />
            <li>
              <a href="">Contact us</a>
            </li>
            <hr />
            <li>
              <a href="">About Us</a>
            </li>
            <hr />
          </ul>
        </div>
      </div>

      {/* second header end */}
    </>
  );
};

export default Header;
