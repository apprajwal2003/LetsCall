import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../pageStyles/History.css";

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch (e) {
        console.log(e);
      }
    };
    fetchHistory();
  }, []);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <div className="HistoryPageContainer">
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
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                Home
              </Link>
            </div>
          </div>
        </nav>
        <div className="card-grid">
          {meetings.length !== 0 ? (
            meetings.map((e, ind) => (
              <div key={ind} className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Code: {e.meeting_code}
                  </h6>
                  <p className="card-text">Date:{formatDate(e.date)}</p>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
