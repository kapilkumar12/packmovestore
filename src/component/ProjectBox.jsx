import React from "react";
import { Link } from "react-router-dom";
// import RedPlusIcon from "./RedPlusIcon";

const ProjectBox = (props) => {
  let { imageUrl, title, service, urlTitle, urlService, redIcon } = props;
  return (
    <>
      <div className="col-sm  projecrfirst">
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
        {/* <RedPlusIcon redIcon={"fa-solid fa-plus"} /> */}
      </div>
    </>
  );
};

export default ProjectBox;
