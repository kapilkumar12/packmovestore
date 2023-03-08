import React from "react";

const Footer = () => {
  //   $(document).ready(function () {
  //     $('[data-toggle="tooltip"]').tooltip();
  //   });
  return (
    <>
      <div className="container-fluid p-1 mt-5 bg-dark">
        <div className="container">
          <div className="row pt-5">
            <div className="col lg ">
              <div className="d-flex gap-4">
                <div className="phone-icon">
                  <i className="fa-solid fa-headphones"></i>
                </div>
                <div className="phone-text">
                  <h5>Phone:</h5>
                  <a href="tel:+917194452808">(719) 445-2808</a>
                </div>
              </div>
            </div>
            <div className="col lg">
              <div className="d-flex gap-4">
                <div className="phone-icon">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                </div>
                <div className="phone-text">
                  <h5>Address:</h5>
                  <a href="">4578 Marmora Road</a>
                </div>
              </div>
            </div>
            <div className="col lg">
              <div className="d-flex gap-4">
                <div className="phone-icon">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                </div>
                <div className="phone-text">
                  <h5>E-mail:</h5>
                  <a href="">info@demolink.org</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-light mt-5" />

        <div className="container text-light pt-5 footer-mid">
          <div className="row ">
            <div className="col lg">
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
                  <a>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Tooltip on top"
                  >
                    <i className="fa-brands fa-flickr"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>

                {/* </ul> */}
              </div>
            </div>
            <div className="col lg">
              <div>
                <h5>Categories</h5>
                <div className="category-line"></div>
                <div className="categories">
                  <li>
                    <a href="">Household Moving</a>
                  </li>
                  <li>
                    <a href="">International Moving</a>
                  </li>
                  <li>
                    <a href="">Relocation Moving</a>
                  </li>
                  <li>
                    <a href="">Transports Takecare</a>
                  </li>
                  <li>
                    <a href="">Uncategorized</a>
                  </li>
                </div>
              </div>
            </div>
            <div className="col lg">
              <div>
                <h5>Tags</h5>
                <div className="tag-line"></div>
                <div className="row pt-4">
                  <div className="col-sm">
                    <div className="household-btn">
                      <a href="">Household</a>
                    </div>
                  </div>
                  <div className="col-sm household">
                    <div className="household-btn">
                      <a href="">International</a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="household-btn">
                      <a href="">Relocation</a>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="household-btn transport">
                      <a href="">Transports</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col lg">
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
