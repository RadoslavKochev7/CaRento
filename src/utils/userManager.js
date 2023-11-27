import { useContext } from "react"
import { authContext } from "../contexts/AuthContext"

export const canUserManage = (objectOwnerId) => {
  const { userId, isAuthenticated, isAdmin } = useContext(authContext);

  return isAdmin || (isAuthenticated && userId === objectOwnerId);
}
