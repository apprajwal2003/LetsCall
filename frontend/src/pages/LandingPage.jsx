import React, { useEffect } from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landingPageContainer">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            LetsCall
          </div>
          <div className="navBarOptions">
            <div>Join as guest</div>
            <div>Register</div>
            <div>Login</div>
          </div>
        </div>
      </nav>
      <div className="landingPageMainContent container">
        <div className="fs-4 content">
          "Connect instantly, anytime, anywhere <br />– Welcome to LetsCall!"
        </div>
        <div>
          <img
            src="/DeWatermark.ai_1742836867586-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
