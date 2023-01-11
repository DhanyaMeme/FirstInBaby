import AuthGuard from "../layout/AuthGuard";

const AuthVerifyRoutes = {
  path: "/",
  element: <AuthGuard />,
  children: [],
};

export default AuthVerifyRoutes;
