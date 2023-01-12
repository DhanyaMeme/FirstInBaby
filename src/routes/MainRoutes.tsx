import BaseLayout from "../layout/BaseLayout";
import { Navigate } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { ProductCollection } from "../pages/ProductCollection";

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
  ],
};

export default MainRoutes;
