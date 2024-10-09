import React from "react";
import logo from "/images/logo.png";
import heart from "/images/heart.png";
import contact from "/images/contact.png";
import trolley from "/images/cart1.png";
import user from "/images/icon.jpg";
import {Link, NavLink} from 'react-router-dom'
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
          <div className="pfpdiv"><img className="iconpfp" src={user} alt="User" />
            <ul className="dropdown-menu">
            <NavLink className="navlink"
              to={"/login"}>
              <li>
                  Login
              </li>
              </NavLink>
              <hr />
              <li>Team</li>
              <hr />
              <li>Help</li>
              <hr />
              <li>Report</li>
            </ul>
          </div>
          </div>
        </div>
        </div>
      </nav>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-links">
            <a href="/" className="category">Home</a>
            <a href="/clothes" className="category">Clothes</a>
            <a href="/electronics" className="category">Electronics</a>
            <a href="/kids" className="category">Kids</a>
            <a href="/students" className="category">Students</a>
            <a href="/furniture" className="category">Furniture</a>
            <a href="/gifts" className="category">Gifts</a>
            <a href="/sell" className="category">Sell</a>
            <a href="/accessories" className="category">Accessories</a>
            <a href="/bitcoin" className="category">Bitcoin</a>
          </div>
        </div>
      </nav>
    </>
  );
}
