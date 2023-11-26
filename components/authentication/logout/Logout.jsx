import { useContext, useEffect } from "react";
import { authContext } from "../../../src/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import * as authService from "../../../src/services/authService";

export default function Logout() {
  const { logoutHandler } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    authService.logout()
      .then(() => {
        logoutHandler();
        navigate("/");
      })
      .catch(() => navigate("/"));
  }, []);

  return null;
}
