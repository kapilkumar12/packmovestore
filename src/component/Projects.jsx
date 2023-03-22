import React, { useEffect } from "react";
import Footer from "./Footer";

import "./style.css";
import { Link } from "react-router-dom";
import HeaderSecond from "./HeaderSecond";
import ProjectBox from "./ProjectBox";

const Projects = (props) => {
  useEffect(() => {
    document.title = "Pack Move Store - Our Projects";
  }, []);
  return (
    <>
      <HeaderSecond />
      <div className="quote">
        <div className="quote-text">
          <h1>Projects Style 1</h1>
        </div>
        <div className="breadcrumb-wrapper-inner text-center">
          <span>
            <Link title="Go to My Home Page." to="/" className="home">
              <i className="fa-solid fa-house "></i>
            </Link>
          </span>
          <span className="themestek-bread-sep"> &nbsp; → &nbsp;</span>
          <span>
            <span className="post post-page current-item">
              Projects Style 1
            </span>
          </span>
        </div>
      </div>

      <div className="container p-5">
        <div className="row p-5">
          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-03.jpg"
              title="Interior"
              urlService={""}
              service="Office Removels"
              redIcon="fa-solid fa-plus"
            />
          </div>
          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-02.jpg"
              urlTitle={""}
              title="Pre Packing"
              urlService={""}
              service="Overseas Moving"
              redIcon="fa-solid fa-plus"
            />
          </div>
          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-03.jpg"
              urlTitle={""}
              title={"Moving"}
              urlService={""}
              service="Warehousing Solutions"
              redIcon="fa-solid fa-plus"
            />
          </div>
        </div>

        <div className="row p-5">
          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-02.jpg"
              urlTitle={""}
              title={"Moving"}
              urlService={""}
              service="Moving Interstate"
              redIcon="fa-solid fa-plus"
            />
          </div>

          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-03.jpg"
              urlTitle={""}
              title={"Interior"}
              urlService={""}
              service="Office Furniture Moving"
              redIcon="fa-solid fa-plus"
            />
          </div>

          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-02.jpg"
              urlTitle={""}
              title={"Pre Packing"}
              urlService={""}
              service="Living Room"
              redIcon="fa-solid fa-plus"
            />
          </div>
        </div>
        <div className="row p-5">
          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-03.jpg"
              urlTitle={""}
              title={"Interior"}
              urlService={""}
              service="Beautiful House"
              redIcon="fa-solid fa-plus"
            />
          </div>

          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-02.jpg"
              urlTitle={""}
              title={"Moving"}
              urlService={""}
              service="Fashion Shop"
              redIcon="fa-solid fa-plus"
            />
          </div>

          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-03.jpg"
              urlTitle={""}
              title={"Pre Packing"}
              urlService={""}
              service="Surface Cleaning"
              redIcon="fa-solid fa-plus"
            />
          </div>
        </div>
        <div className="row p-5">
          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-02.jpg"
              urlTitle={""}
              title={"Moving"}
              urlService={""}
              service="Residential Movers"
              redIcon="fa-solid fa-plus"
            />
          </div>

          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-03.jpg"
              urlTitle={""}
              title={"Interior"}
              urlService={""}
              service="Cultural House"
              redIcon="fa-solid fa-plus"
            />
          </div>

          <div className="col-sm projecrfirst pt-5">
            <ProjectBox
              imageUrl="images/img-02.jpg"
              urlTitle={""}
              title={"Pre Packing"}
              urlService={""}
              service="Organic Synthesis"
              redIcon="fa-solid fa-plus"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
