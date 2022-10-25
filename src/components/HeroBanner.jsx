import React from "react";

const Herobanner = ({ image, title }) => {
  return (
    <div className="thumb-banner">
      <img src={image} alt="" className="thumb__img" />
      <div className="thumb-banner__overlay"></div>
      <h2 className="thumb__title__banner">{title}</h2>
    </div>
  );
};

export default Herobanner;