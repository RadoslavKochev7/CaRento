import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { useNavigate } from "react-router-dom";
import * as authService from "../services/authService";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = usePersistedState("auth", {});
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(
      values.email,
      values.password,
      values.username
    );

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate("/");
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate("/login");
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
