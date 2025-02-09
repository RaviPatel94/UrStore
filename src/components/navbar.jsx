import React, { useState, useEffect } from "react";
import logo from "/images/logo.png";
import heart from "/images/heart.png";
import contact from "/images/contact.png";
import trolley from "/images/cart1.png";
import user from "/images/icon.jpg";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartTab from "./CartTab.jsx";

const Navbar = ({ setShowLogin }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const carts = useSelector((store) => store.cart.items);
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  return (
    <>
      <nav className="navbar">
        <div id="mainnav">
          <div className="navleft">
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
              <img
                className="icon"
                style={{ margin: "5px" }}
                src={heart}
                alt="Favorites"
              />
              <img
                className="icon"
                style={{ margin: "6px" }}
                src={contact}
                alt="Contact"
              />
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  margin: "5px",
                }}
                className="cart-div"
              >
                <img className="icon" src={trolley} alt="Cart" />

                {/* Notification badge positioned over the cart */}
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-5px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "15px", // Vertically center the text
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "10px", // Adjust font size for better fit
                  }}
                >
                  {" "}
                  {totalQuantity}{" "}
                </span>
                <ul className="dropdown-menu-cart">
                  <CartTab />
                </ul>
              </div>
              <div className="pfpdiv">
                <img className="iconpfp" src={user} alt="User" />
                <ul className="dropdown-menu">
                  {/* <NavLink className="navlink" to={"/login"}> */}
                  <li onClick={() => setShowLogin(true)} >Login</li>
                  {/* </NavLink> */}
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
            <NavLink to="/home"> Home</NavLink>
            <NavLink to="/clothes">Clothes</NavLink>
            <NavLink to="/electronics">Electronics</NavLink>
            <NavLink to="/kids">Kids</NavLink>
            <NavLink to="/students">Students</NavLink>
            <NavLink to="/furniture">Furniture</NavLink>
            <NavLink to="/gifts">Gifts</NavLink>
            <NavLink to="/sell">Sell</NavLink>
            <NavLink to="/accessories">Accessories</NavLink>
            <NavLink to="/bitcoin">Bitcoin</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar