import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "../../contexts/AuthContext";
import { login } from "../../constants/pathConstants";

export default function AuthGuard(props) {
    const { isAuthenticated } = useContext(authContext);

    if (!isAuthenticated) {
        return <Navigate to={login} />;
    }

    return <Outlet />;
}