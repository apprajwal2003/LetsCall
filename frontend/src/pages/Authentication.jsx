import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import "../pageStyles/Authentication.css";
import httpStatus from "http-status";

export default function Authentication() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState();

  const { form, setForm, handleSignUp, handleLogin } = useContext(AuthContext);

  const handleAuth = async (e) => {
    setError("");
    e.preventDefault();
    try {
      if (form === 0) {
        //login
        let result = await handleLogin(username, password);
      }
      if (form === 1) {
        //signup
        let result = await handleSignUp(name, username, password);
        setPassword("");
        setName("");
      }
    } catch (err) {
      let message = err.response.data.message;
      setError(message);
    }
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
                onClick={() => {
                  setForm(0);
                  setError("");
                }}
              >
                Login
              </button>
              <button
                className={
                  form === 1 ? "btn btn-primary" : "btn btn-outline-primary"
                }
                onClick={() => {
                  setForm(1);
                  setError("");
                }}
              >
                SignUp
              </button>
            </div>

            <form className="w-75" onSubmit={handleAuth}>
              {form === 1 ? (
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="user123"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
              ) : (
                <></>
              )}

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputUsername"
                  placeholder="name@example.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="floatingInputUsername">username</label>
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
              <p style={{ color: "red" }}>{error}</p>
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
