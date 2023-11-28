import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import usePersistedState from "../hooks/usePersistedState";
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
    navigate("/login");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
    isAdmin:
      auth.email === "admin@abv.bg" &&
      auth._id === "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthProvider;
