import { useContext, useEffect } from "react";
import { authContext } from "../../../src/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import * as authService from "../../../src/services/authService";

export default function Logout() {
  const { setAuthData } = useContext(authContext);
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
    setAuthData({});
    localStorage.removeItem("authData");
  };

  useEffect(() => {
    authService.logout()
      .then(() => {
        onLogout;
        navigate("/");
      })
      .catch((error) => {
        console.error(error)
        navigate("/")
    });
  }, []);

  return null;
}
