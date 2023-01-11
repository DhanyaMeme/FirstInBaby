import * as React from "react";
import { Provider } from "react-redux";
import { ReactNode, ReactPortal } from "react";
import { Store } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { SettingProvider } from "./contexts/SettingContext";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

type Children = ReactNode | Array<Children> | ReactPortal;

export interface IChildrenProp {
  children: Children;
}

/**
 * Responsible for rendering the IntlProvider component
 */

const StateAndRouterProvider: React.FC<IChildrenProp> = (
  props: IChildrenProp
) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SettingProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>{props.children}</PersistGate>
          </Provider>
        </SettingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { StateAndRouterProvider };
