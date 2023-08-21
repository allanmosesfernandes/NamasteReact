import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/"><img src={Logo} alt="logo" /></Link>
        </div>
        <div className="nav__links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
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
