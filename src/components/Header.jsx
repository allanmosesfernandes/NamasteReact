import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/images/logo.png";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const [login, setLogin] = useState(false);
  const loginHandler = () => setLogin(!login);
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="nav__links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart (
                {cartItems.length}
                )
              </Link>
            </li>
            <button onClick={loginHandler} type="button">
              {login ? "Logout" : "Login"}
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
