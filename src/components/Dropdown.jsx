import React from "react";
import { useState } from "react";

import Vector from "../assets/arrow_up.png";

function Dropdown({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="Dropdown ">
      <button
        type="button"
        className="Dropdown__button"
        onClick={() => setOpen(!open)}
      >
        <p className="title">{title}</p>

        {open ? (
          <img src={Vector} alt="" className="Dropdown__arrow" />
        ) : (
          <img src={Vector} alt="" className={"Dropdown__arrow" + " " + "rotate"} />
        )}

        
      </button>

      {open ? (
        <div className={"Dropdown__content" + " " + "show"}>
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
      ) : (
        <div className={"Dropdown__content"}></div>
      )}
    </div>
  );
}

export default Dropdown;
