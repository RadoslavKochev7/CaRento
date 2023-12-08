import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "../../contexts/AuthContext";
import { unauthorized } from "../../constants/pathConstants";

export default function AuthGuard() {
    const { isAdmin } = useContext(authContext);

    if (!isAdmin) {
        return <Navigate to={unauthorized} />;
    }

    return <Outlet />;
}