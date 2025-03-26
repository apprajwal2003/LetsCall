import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./SignInPage.css";
import axios from "axios";

export default function SignInPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialForm = searchParams.get("form") === "1" ? 1 : 0;

  const [form, setForm] = useState(initialForm);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios;
  };

  return (
    <div className="signUpPage">
      <div className="container-fluid">
        <div className="row vh-100 g-0">
          <div className="col-7 d-flex align-items-center justify-content-center">
            <img
              src="https://picsum.photos/1920/1080"
              alt="Random"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="col-5 d-flex flex-column justify-content-center align-items-center login">
            <div className="fs-1 fw-bold text-center mb-4">LetsCall</div>
            <div className="mb-4 d-flex gap-2">
              <button
                className={
                  form === 0 ? "btn btn-primary" : "btn btn-outline-primary"
                }
                onClick={() => setForm(0)}
              >
                Login
              </button>
              <button
                className={
                  form === 1 ? "btn btn-primary" : "btn btn-outline-primary"
                }
                onClick={() => setForm(1)}
              >
                SignUp
              </button>
            </div>

            <form className="w-75" onSubmit={handleSubmit}>
              {form === 1 ? (
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
              ) : (
                <></>
              )}

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInputEmail">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="name@example.com"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="btn btn-primary w-100">
                {form === 1 ? "SignUp" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
