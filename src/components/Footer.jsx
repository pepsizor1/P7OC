import React from "react";

import logoFooter from "../assets/logofooter.png";

function Footer() {
  const Year = new Date().getFullYear();

  return (
    <footer className="footer">
      <img src={logoFooter} alt="" className="footer__logo" />
      <p className="footer__text">
        &copy;
        {Year} Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;