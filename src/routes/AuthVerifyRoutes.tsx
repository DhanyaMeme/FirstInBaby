import AuthGuard from "../layout/AuthGuard";
import Address from "../pages/Address";
import Profile from "../pages/Profile";
import { Wishlist } from "../pages/Wishlist";

const AuthVerifyRoutes = {
  path: "/",
  element: <AuthGuard />,
  children: [
    {
      path: "wishlist",
      element: <Wishlist />,
    },
    {
      path: "address",
      element: <Address />,
    },
    {
      path: "account",
      element: <Profile />,
    },
  ],
};

export default AuthVerifyRoutes;
