import AuthGuard from "../layout/AuthGuard";
import { Wishlist } from "../pages/Wishlist";

const AuthVerifyRoutes = {
  path: "/",
  element: <AuthGuard />,
  children: [
    {
      path: "wishlist",
      element: <Wishlist />,
    },
  ],
};

export default AuthVerifyRoutes;
