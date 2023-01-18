import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface AuthGuardProps {
  children?: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  // const { user: isAuthenticated } = useAuth();

  // const { pathname } = useLocation();
  // const [requestedLocation, setRequestedLocation] = useState<string | null>(
  //   null
  // );

  // if (!isAuthenticated) {
  //   if (pathname !== requestedLocation) {
  //     setRequestedLocation(pathname);
  //   }
  //   return <AuthLogin />;
  // }

  // if (requestedLocation && pathname !== requestedLocation) {
  //   setRequestedLocation(null);
  //   return <Navigate to={requestedLocation} />;
  // }

  return <>{children || <Outlet />}</>;
};

export default AuthGuard;
