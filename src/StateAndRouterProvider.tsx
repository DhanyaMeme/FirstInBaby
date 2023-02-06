import * as React from "react";
import { Provider } from "react-redux";
import { ReactNode, ReactPortal } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { SettingProvider } from "./contexts/SettingContext";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

type Children = ReactNode | Array<Children> | ReactPortal;

export interface IChildrenProp {
  children: Children;
}

// const stripePromise = loadStripe(STRIPE_KEY);

/**
 * Responsible for rendering the IntlProvider component
 */

const StateAndRouterProvider: React.FC<IChildrenProp> = (
  props: IChildrenProp
) => {
  return (
    <BrowserRouter>
      {/* <Elements stripe={stripePromise}> */}
        <AuthProvider>
          <SettingProvider>
            <Provider store={store}>
              <PersistGate persistor={persistor}>{props.children}</PersistGate>
            </Provider>
          </SettingProvider>
        </AuthProvider>
      {/* </Elements> */}
    </BrowserRouter>
  );
};

export { StateAndRouterProvider };
