import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const toggle = () => setShowMenu((prev) => !prev);
    document.getElementById("navToggle").addEventListener("click", toggle);

    return () =>
      document.getElementById("navToggle").removeEventListener("click", toggle);
  }, []);

  return (
    <header className="header">
      <nav className="header-nav">
        <div
          className={`nav-toggle ${showMenu ? "show-icon" : ""}`}
          id="navToggle"
        >
          <i className="fa-solid fa-bars nav-burger"></i>
          <i className="fa-solid fa-xmark nav-close"></i>
        </div>
        <div className="nav-data">
          <Link to={"/K3s-Pizza-Redux/"}>
            <div className="flex gap-3 justify-center items-center">
              <i className="fa-solid fa-pizza-slice text-2xl text-[#b54141]"></i>
              <div className="font-[mont-heavy] text-2xl text-[#1e1e1e]">
                K3's Pizza
              </div>
            </div>
          </Link>
        </div>
        <div className={`nav-menu ${showMenu ? "show-menu" : ""}`} id="navMenu">
          <ul className="nav-list">
            <li>
              <NavLink className="nav-list-link" to={"/K3s-Pizza-Redux/pizza/"}>
                PIZZA
              </NavLink>
            </li>

            <li>
              <NavLink
                className="nav-list-link"
                to={"/K3s-Pizza-Redux/pizza-maker/"}
              >
                PIZZA MAKER
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/K3s-Pizza-Redux/basket/"}>
          <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className="m-1 nav-user">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </Link>
      </nav>
    </header>
  );
}
