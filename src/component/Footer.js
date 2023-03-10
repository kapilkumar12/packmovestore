import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid p-1 mt-5 bg-dark">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg footer-div">
              <div className="d-flex gap-4">
                <div className="phone-icon">
                  <i className="fa-solid fa-headphones"></i>
                </div>
                <div className="phone-text">
                  <h5>Phone:</h5>
                  <Link to="tel:+917194452808">(719) 445-2808</Link>
                </div>
              </div>
            </div>
            <div className="col-lg footer-div">
              <div className="d-flex gap-4">
                <div className="phone-icon">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                </div>
                <div className="phone-text">
                  <h5>Address:</h5>
                  <Link to="">4578 Marmora Road</Link>
                </div>
              </div>
            </div>
            <div className="col-lg footer-div">
              <div className="d-flex gap-4">
                <div className="phone-icon">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                </div>
                <div className="phone-text">
                  <h5>E-mail:</h5>
                  <Link to="">info@demolink.org</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-light mt-5" />

        <div className="container text-light pt-5 footer-mid">
          <div className="row ">
            <div className="col-lg">
              <div className="footer-logo">
                <img src="images/logo-white.png" alt="" />
              </div>
              <p className="pt-4">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore.Duis aute irure dolor in reprehenderit in
                voluptate velit.
              </p>
              <div className="footer-icon">
                {/* <ul> */}
                <li>
                  <Link to="">
                    <div className="hover-icon">
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>

                    <div className="hover-icon-box">
                      <p>Facebook</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div className="hover-icon">
                      <i className="fa-brands fa-twitter"></i>
                    </div>

                    <div className="hover-icon-box">
                      <p>Twitter</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div className="hover-icon">
                      <i className="fa-brands fa-flickr"></i>
                    </div>

                    <div className="hover-icon-box">
                      <p>Flickr</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <div className="hover-icon">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>

                    <div className="hover-icon-box">
                      <p>Linkedin</p>
                    </div>
                  </Link>
                </li>

                {/* </ul> */}
              </div>
            </div>
            <div className="col-lg footer-cate">
              <div>
                <h5>Categories</h5>
                <div className="category-line"></div>
                <div className="categories">
                  <li>
                    <Link to="">Household Moving</Link>
                  </li>
                  <li>
                    <Link to="">International Moving</Link>
                  </li>
                  <li>
                    <Link to="">Relocation Moving</Link>
                  </li>
                  <li>
                    <Link to="">Transports Takecare</Link>
                  </li>
                  <li>
                    <Link to="">Uncategorized</Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-lg footer-cate">
              <div>
                <h5>Tags</h5>
                <div className="tag-line"></div>
                <div className="row pt-4">
                  <div className="col-sm">
                    <div className="household-btn">
                      <Link to="">Household</Link>
                    </div>
                  </div>
                  <div className="col-sm household">
                    <div className="household-btn">
                      <Link to="">International</Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="household-btn">
                      <Link to="">Relocation</Link>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="household-btn transport">
                      <Link to="">Transports</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div>
                <h5>NEWSLETTER</h5>
                <div className="tag-line"></div>
                <p className="newslatter">
                  Accusamus et iusto odio praesentium quas molestias except.
                  [mc4wp_form id="8812"]
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div className="footer-end">
            <p>Copyright © 2022 Pack Move Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
