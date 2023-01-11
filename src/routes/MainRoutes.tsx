import BaseLayout from "../layout/BaseLayout";
import { Navigate } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

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
  ],
};

export default MainRoutes;
