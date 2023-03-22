import React from "react";

const RedPlusIcon = (props) => {
  let { redIcon } = props;
  return (
    <>
      <div className="plus-icon">
        <i className={redIcon}></i>
      </div>
    </>
  );
};

export default RedPlusIcon;
