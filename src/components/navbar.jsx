import React from "react";
import logo from "../images/logo.png";
import heart from "../images/heart.png";
import contact from "../images/contact.png";
import trolley from "../images/cart1.png";
import user from "../images/icon.jpg";
export default function Navbar() {
  return (
    <>
      <nav className="navbar" >
        <div id="mainnav">
        <div className="navleft" >
        <div className="logo">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <h1 className="logo-name">UrStore</h1>
        </div>
        <input className="search-bar" type="text" placeholder="Search" />
        </div>
        <div className="navbar-right">
          <div className="icon-container">
            <span className="pointlogo">P</span>
            <span className="pointsdisplay">100</span>
          </div>
          <div className="options">
          <img className="icon" src={heart} alt="Favorites" />
          <img className="icon" src={contact} alt="Contact" />
          <img className="icon" src={trolley} alt="Cart" />
          <div className="pfpdiv"><img className="icon" src={user} alt="User" />
            <ul className="dropdown-menu">
              <li>Login</li>
              <li>Team</li>
              <li>Help</li>
              <li>Report</li>
              <li>Theme</li>
            </ul>
          </div>
          </div>
        </div>
        </div>
      </nav>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-links">
            <a href="/">Home</a>
            <a href="/clothes">Clothes</a>
            <a href="/electronics">Electronics</a>
            <a href="/kids">Kids</a>
            <a href="/students">Students</a>
            <a href="/furniture">Furniture</a>
            <a href="/gifts">Gifts</a>
            <a href="/sell">Sell</a>
            <a href="/accessories">Accessories</a>
            <a href="/bitcoin">Bitcoin</a>
          </div>
        </div>
      </nav>
    </>
  );
}
