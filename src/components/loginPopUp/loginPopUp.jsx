import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPopup.css";

export default function LoginPopup({ setShowLogin }) {
  const [signbtn, btnClicked] = useState(false);
  const [value1, setValue1] = useState("flex");
  const [value2, setValue2] = useState("none");
  const [btnlbl, setbtn] = useState("Signup");
  const [dont, setdont] = useState("Don't");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // State to store the logged-in user's name
  const [loggedInUser, setLoggedInUser] = useState(null);

  const Change = () => {
    setValue1((prevDisplay) => (prevDisplay === "none" ? "flex" : "none"));
    setValue2((prevDisplay) => (prevDisplay === "none" ? "flex" : "none"));
    setbtn((prevDisplay) => (prevDisplay === "Signup" ? "Signin" : "Signup"));
    setdont((prevDisplay) => (prevDisplay === "Don't" ? "" : "Don't"));
  };

  const handleLogin = () => {
    const loginData = { email, password };

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Login successful!");
          setLoggedInUser(data.name); // Set the user's name in parent state
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setShowLogin(false);
  };

  return (
    <div className="signinbox">
      {loggedInUser && <h3 className="greeting">Hi, {loggedInUser}!</h3>} {/* Greeting element */}
      
      {/* Signup Form */}
      <div className="inputs" id="signup" style={{ display: value2 }}>
        <h1>Sign Up</h1>
        <h3>Name</h3>
        <input
          required
          type="text"
          className="credentials"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3>Email</h3>
        <input
          required
          type="email"
          className="credentials"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>Password</h3>
        <input
          required
          type="password"
          className="credentials"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            const signUpData = { name, email, password };

            // Send data to the backend
            fetch("http://localhost:5000/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(signUpData),
            })
              .then((response) => {
                if (response.ok) {
                  alert("Sign up data saved successfully!");
                } else {
                  alert("Error saving sign up data");
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });

            setShowLogin(false);
          }}
        >
          Sign Up
        </button>

        <img
          onClick={() => setShowLogin(false)}
          src="/images/cross_icon.png"
          className="cross_icon_login"
          width={24}
          height={24}
          alt=""
        />
      </div>

      <div className="brandbox">
        <h1>Welcome to</h1>
        <div className="brandlogo">
          <img src="/images/logo.png" alt="Logo" />
          <span className="logotext">UrStore</span>
        </div>
        <span className="branddisc">Buy anything and everything</span>
        <p>{dont} have an account?</p>
        <button
          id="signbtn"
          onClick={() => {
            btnClicked((prev) => !prev);
            Change();
          }}
        >
          {btnlbl}
        </button>
      </div>

      {/* Signin Form */}
      <div className="inputs" id="signin" style={{ display: value1 }}>
        <h1>Sign in</h1>
        <h3>Email</h3>
        <input
          required
          type="text"
          className="credentials"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>Password</h3>
        <input
          required
          type="password"
          className="credentials"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Sign in</button>
        <img
          onClick={() => setShowLogin(false)}
          src="/images/cross_icon.png"
          className="cross_icon_login"
          width={24}
          height={24}
          alt=""
        />
        <div className="helpsignin">
          <a href="/">Forgot password</a>
          <div className="remember">
            <p>Remember me?</p>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}
