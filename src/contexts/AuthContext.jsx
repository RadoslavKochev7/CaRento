import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { useNavigate } from "react-router-dom";
import * as authService from "../services/authService";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = usePersistedState("auth", {});
  const navigate = useNavigate();

  const loginSubmitHandler = async (email, password, username) => {
    try {
      const result = await authService.login(email, password, username);

      if (!result.accessToken) {
        // bad request
        console.log(result.message);
      } else {
        setAuth(result);

        localStorage.setItem("accessToken", result.accessToken);

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registerSubmitHandler = async (email, password, username) => {
    try {
      const result = await authService.register(email, password, username);
      if (!result.accessToken) {
        // bad request
        console.log(result.message);
      } else {
        setAuth(result);

        localStorage.setItem("accessToken", result.accessToken);

        navigate("/login");
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthProvider;
