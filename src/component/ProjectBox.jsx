import React from "react";
import { Link } from "react-router-dom";

const ProjectBox = (props) => {
  let { imageUrl, title, service, urlTitle, urlService, redIcon } = props;
  return (
    <>
      <div className="projecrfirst text-center">
        <div>
          <div className="office-removel">
            <img src={imageUrl} alt="" />
          </div>
          <div className="office-removel-text">
            <Link to={urlTitle}>{title}</Link>

            <h3>
              <Link to={urlService}>{service}</Link>
            </h3>
          </div>
        </div>
        <div className="plus-icon">
          <i className={redIcon}></i>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
