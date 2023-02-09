import { Fragment, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import { useAppDispatch } from "./redux/store";
import LayoutWrapper from "./layout/LayoutWrapper";
import NavigationScroll from "./ui_kits/NavigationScroll";
import { ScrollTop } from "./ui_kits/ScrollTop/ScrollTop";
import ModalManager from "./ui_kits/modal/modal-manager.component";
import { fetchCategoriesAsync } from "./redux/slices/nav/nav.reducer";
import { fetchAllProductsAsync } from "./redux/slices/collection/collection.reducer";

// style + assets
import "./assets/scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import { useAuth } from "./contexts/AuthContext";
import { fetchCustomerAsync } from "./redux/slices/profile/profile.reducer";
import { fetchAddressAsync } from "./redux/slices/address/address.reducer";
import {
  fetchCollectionAsync,
  fetchFeaturePdtsAsync,
  fetchHotAsync,
} from "./redux/slices/home/home.reducer";

function App() {
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  // Home Screen

  useEffect(() => {
    dispatch(fetchCollectionAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchHotAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFeaturePdtsAsync());
  }, [dispatch]);

  // Profile

  useEffect(() => {
    if (user) {
      dispatch(fetchCustomerAsync(user));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      dispatch(fetchAddressAsync(user));
    }
  }, [dispatch, user]);

  return (
    <Fragment>
      <ScrollTop />
      <ToastContainer />
      <ModalManager />
      <LayoutWrapper>
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </LayoutWrapper>
    </Fragment>
  );
}

export default App;
