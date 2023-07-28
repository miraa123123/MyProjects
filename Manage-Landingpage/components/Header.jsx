import React, { useState } from "react";
import Logo from "../images/Logo.svg";
import Menu from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="logo-container">
        <a href="index.html">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a className="nav-link" href="#">Pricing</a></li>
          <li><a className="nav-link" href="#">Product</a></li>
          <li><a className="nav-link" href="#">About us</a></li>
          <li><a className="nav-link" href="#">Careers</a></li>
          <li><a className="nav-link" href="#">Community</a></li>
        </ul>
      </nav>

      {open && (
        <div className="more">
          <div id="more-container" className="more-container">
            <li><a className="nav-link-mobile" href="#">Pricing</a></li>
            <li><a className="nav-link-mobile" href="#">Product</a></li>
            <li><a className="nav-link-mobile" href="#">About us</a></li>
            <li><a className="nav-link-mobile" href="#">Careers</a></li>
            <li><a className="nav-link-mobile" href="#">Community</a></li>
          </div>
        </div>
      )}

      <div className="cart">
        <a href="#">
          <button className="btn">Get Started</button>
        </a>
        <img
          onClick={() => setOpen(!open)}
          src={open ? Close : Menu} // Toggle between Close and Menu icons based on 'open' state
          className="menu"
          alt="Menu"
        />
      </div>
    </header>
  );
}
