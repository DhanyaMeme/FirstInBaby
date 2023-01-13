import AuthGuard from "../layout/AuthGuard";
import Address from "../pages/Address";
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
  ],
};

export default AuthVerifyRoutes;
