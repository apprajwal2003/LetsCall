import React, { useContext, useState } from "react";
import withAuth from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../pageStyles/HomePage.css";
import { AuthContext } from "../context/AuthContext";

function HomePage() {
  const [meetingCode, setMeetingCode] = useState("");
  let navigate = useNavigate();
  const { addToUserHistory } = useContext(AuthContext);

  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };
  return (
    <>
      <div className="HomePageContainer">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-brand">
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                LetsCall
              </Link>
            </div>
            <div className="navBarOptions">
              <Link to="/history">History</Link>
              <Link
                to="/"
                onClick={() => {
                  localStorage.removeItem("token");
                }}
              >
                Logout
              </Link>
            </div>
          </div>
        </nav>
        <div className="HomePageMainContent container">
          <div className="fs-2 content gap-2">
            <input
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
              className="form-control meetingInput"
              placeholder="Enter meeting code"
              id="floatingTextarea"
            ></input>
            <button className="joinMeet" onClick={handleJoinVideoCall}>
              Join
            </button>
          </div>
          <div className="contentImage">
            <img
              src="/DeWatermark.ai_1742836867586-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(HomePage);
