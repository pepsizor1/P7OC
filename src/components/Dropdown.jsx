import React from "react";
import Vector from "../assets/Vector.png";


const Dropdown = ({ title, content }) => {
  const isDropdown = (e) => {
    e.preventDefault();
    const divText = e.target.nextSibling;
    const arrow = e.target.lastChild;

    if (!divText.classList.contains("show")) {
      divText.classList.add("show");
      arrow.classList.add("rotate");
    } else {
      divText.classList.remove("show");
      arrow.classList.remove("rotate");
    }
  };
  return (
    <div className="Dropdown ">
      <button type="button" className="Dropdown__button" onClick={isDropdown}>
        
        <p className="title">{title}</p>
        <img src={Vector} alt="" className="Dropdown__arrow" />
      </button>
      <div className="Dropdown__content">
        {Array.isArray(content) ? (
          <ul className="Dropdown__list">
            {content.map((equipment, index) => (
              <li key={index} className="Dropdown__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="Dropdown__text">{content}</p>
        )}
      </div>
    </div>
  );
};

export default Dropdown;