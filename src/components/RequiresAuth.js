import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "contexts/auth-context";

export default function RequiresAuth({ children }) {
  const location = useLocation();
  const { authData } = useAuth();

  return authData.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
