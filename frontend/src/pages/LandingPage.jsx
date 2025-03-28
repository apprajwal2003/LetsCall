import React, { useContext, useEffect } from "react";
import "../pageStyles/LandingPage.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

export default function LandingPage() {
  const { setForm } = useContext(AuthContext);

  return (
    <div className="landingPageContainer">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand" href="/">
            LetsCall
          </div>
          <div className="navBarOptions">
            <Link to="/join">Join as guest</Link>
            <Link to="/auth" onClick={() => setForm(1)}>
              Register
            </Link>
            <Link to="/auth" onClick={() => setForm(0)}>
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div className="landingPageMainContent container">
        <div className="fs-2 content">
          "<span style={{ color: "#fff340" }}>Connect</span> instantly, anytime,
          anywhere <br />– Welcome to LetsCall!"
          <div className="getStarted mt-4">
            <Link to="/home">
              <button className="getStartedButton">Get Started</button>
            </Link>
          </div>
        </div>

        <div className="contentImage">
          <img
            src="/DeWatermark.ai_1742836867586-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
