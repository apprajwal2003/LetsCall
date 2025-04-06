import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import httpStatus from "http-status";
import SERVER from "./../Server";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: SERVER,
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [form, setForm] = useState(0);
  const [userData, setUserData] = useState(authContext);

  const handleSignUp = async (name, username, password) => {
    try {
      let request = await client.post("/signup", {
        name: name,
        username: username,
        password: password,
      });
      if (request.status === httpStatus.CREATED) {
        setForm(0);
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
        navigate("/home");
        return request.data.message;
      }
    } catch (error) {
      throw error;
    }
  };

  const getHistoryOfUser = async () => {
    try {
      let request = await client.get("/get_all_activity", {
        params: {
          token: localStorage.getItem("token"),
        },
      });
      return request.data;
    } catch (e) {
      throw e;
    }
  };

  const addToUserHistory = async (meetingCode) => {
    try {
      let request = await client.post("/add_to_activity", {
        token: localStorage.getItem("token"),
        meeting_code: meetingCode,
      });
      return request;
    } catch (e) {
      throw e;
    }
  };

  const data = {
    form,
    setForm,
    userData,
    setUserData,
    handleSignUp,
    handleLogin,
    getHistoryOfUser,
    addToUserHistory,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
