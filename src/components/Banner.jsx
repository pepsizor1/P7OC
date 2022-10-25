import React from "react";

const Banner = ({ image }) => {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__img" />
     
    </div>
  );
};

export default Banner;