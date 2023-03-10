import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <Header />

      <div className="contact-map ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6630.017133714236!2d-117.918974!3d33.812092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sDisneyland%20Park!5e0!3m2!1sen!2sus!4v1678423373601!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container p-5">
        <div className="row text-center p-5">
          <div className="col-lg">
            <div>
              <div className="contact-phone-icon">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-phone-text">
                <h5>Our Address</h5>
                <p>C1/713G, PALAM EXTENSION PART -1, NEW DELHI -110077</p>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div>
              <div className="contact-phone-icon">
                <i className="fa-solid fa-headphones"></i>
              </div>
              <div className="contact-phone-text">
                <h5>Phone Number </h5>
                <p>
                  <Link to="tel:+91 9711118387">+91 9711118387</Link> <br />
                  <Link to="tel:+91 9020103090">+91 9020103090</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div>
              <div className="contact-phone-icon">
                <i className="fa-sharp fa-solid fa-envelope"></i>
              </div>
              <div className="contact-phone-text">
                <h5>Email Address </h5>
                <p>
                  <Link to="mailto:contact@packmovestore.in">
                    contact@packmovestore.in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
      </div>

      <div className="container text-center">
        <div className="form-section">
          <p>CONTACT US</p>
          <h2>Drop us a line</h2>
        </div>
        <div className="form-contant">
          <form action="" method="post">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="yname"
                    id="yname"
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
                    name="transporttype"
                    id="transporttype"
                    class="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    id="subject"
                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="col-lg-12">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12 ">
              {/* <b type="button" id="" class="send-btn">
                Send Message
              </b> */}
              <button className="form-control send-btan" type="submit" id="">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
