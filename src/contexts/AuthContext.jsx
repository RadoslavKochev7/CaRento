import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import usePersistedState from "../hooks/usePersistedState";
import * as authService from "../services/authService";
import * as toastConstants from "../constants/toastConstants";
import * as pathConstants from "../constants/pathConstants";
import * as globalConstants from "../constants/globalConstants";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = usePersistedState(globalConstants.authString, {});
  const navigate = useNavigate();

  const loginSubmitHandler = async (email, password, username) => {
    try {
      const result = await authService.login(email, password, username);

      if (!result.accessToken) {
        // bad request
        toast.error(result.message);
      } else {
        setAuth(result);

        localStorage.setItem(globalConstants.accessTokenString, result.accessToken);
        toast.success(`${toastConstants.loginSucces} ${username}`, { autoClose: 2000 });
        navigate(pathConstants.home);
      }
    } catch (error) {
      console.log(error);
      navigate(pathConstants.error);
    }
  };

  const registerSubmitHandler = async (email, password, username) => {
    try {
      const result = await authService.register(email, password, username);
      if (!result.accessToken) {
        // bad request
        toast.error(result.message);
      } else {
        setAuth(result);

        localStorage.setItem(globalConstants.accessTokenString, result.accessToken);
        toast.success(`${username} ${toastConstants.registerSucces}`, { autoClose: 2000 });
        navigate(pathConstants.login);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      navigate(pathConstants.error);
    }
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem(globalConstants.accessTokenString);
    toast.success(toastConstants.logoutSucces, { autoClose: 2000 });
    navigate(pathConstants.login);
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
      auth.email === globalConstants.adminEmail &&
      auth._id === globalConstants.adminId,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthProvider;
