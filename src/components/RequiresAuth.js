import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function RequiresAuth() {
  const location = useLocation();
  let userLoggedIn = localStorage.getItem("user");
  let tokenSaved = localStorage.getItem("token");

  return tokenSaved && userLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
