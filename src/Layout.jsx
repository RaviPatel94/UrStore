import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import LoginPopUp from "./components/loginPopUp/loginPopup"; // Make sure this import is correct
import { Outlet } from "react-router-dom";
import { Herobanner } from "./components/Herobanner";

const AppWrapper = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const commonElements = (
    <>
      <Navbar setShowLogin={setShowLogin} />
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : null}
      <Herobanner loggedInUser={loggedInUser} />
    </>
  );

  function Layout() {
    return (
      <div className="whole">
        {commonElements}
        <Outlet /> 
      </div>
    );
  }

  return <Layout />;
};

export default AppWrapper;
