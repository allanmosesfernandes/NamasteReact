import React from "react";
import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav__links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
