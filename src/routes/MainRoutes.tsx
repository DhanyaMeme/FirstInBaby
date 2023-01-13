import BaseLayout from "../layout/BaseLayout";
import { Navigate } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { ProductCollection } from "../pages/ProductCollection";
import { ProductView } from "../pages/ProductView";
import Cart from "../pages/Cart";

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <BaseLayout />,
  children: [
    {
      path: "",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "home",
      element: <LandingPage />,
    },
    {
      path: "collections",
      element: <ProductCollection />,
      children: [
        {
          path: ":id",
        },
      ],
    },
    {
      path: "product/:name/:id",
      element: <ProductView />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ],
};

export default MainRoutes;
