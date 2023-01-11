// style + assets
import "./assets/scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import {} from "./StateAndRouterProvider";
import { ScrollTop } from "./ui_kits/ScrollTop/ScrollTop";
import { ToastContainer } from "react-toastify";
import LayoutWrapper from "./layout/LayoutWrapper";
import NavigationScroll from "./ui_kits/NavigationScroll";
import { useAppDispatch } from "./redux/store";
import { fetchCategoriesAsync } from "./redux/slices/nav/nav.reducer";
import { Fragment, useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Fragment>
      <ScrollTop />
      <ToastContainer />
      <LayoutWrapper>
        <NavigationScroll>
          <div></div>
        </NavigationScroll>
      </LayoutWrapper>
    </Fragment>
  );
}

export default App;
