import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import httpStatus from "http-status";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: "http://localhost:8080/",
});

export const AuthProvider = ({ children }) => {
  const authContext = useContext(AuthContext);

  const [form, setForm] = useState(0);
  const [userData, setUserData] = useState(authContext);

  const router = useNavigate();

  const handleSignUp = async (name, username, password) => {
    try {
      let request = await client.post("/signup", {
        name: name,
        username: username,
        password: password,
      });
      if (request.status === httpStatus.CREATED) {
        console.log(request.data.message);
        return request.data.message;
      }
    } catch (error) {
      throw error;
    }
  };

  const handleLogin = async (username, password) => {
    try {
      let request = await client.post("/login", {
        username: username,
        password: password,
      });

      if (request.status === httpStatus.OK) {
        localStorage.setItem("token", request.data.token);
        console.log(request.data.message);
        return request.data.message;
      }
    } catch (error) {
      throw error;
    }
  };

  const data = {
    form,
    setForm,
    userData,
    setUserData,
    handleSignUp,
    handleLogin,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
