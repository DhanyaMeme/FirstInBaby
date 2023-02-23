import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// component props interface
interface GuestGuardProps {
  children?: ReactNode;
}
const GuestGuard = ({ children }: GuestGuardProps) => {
  //// UNCOMMNET BELOW CODE IF YOU WANT TO HIDE AUTH PAGES TO AUTHENTICATED USERS

  const { user: isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/account" />;
  }

  return <>{children || <Outlet />}</>;
};

export default GuestGuard;
