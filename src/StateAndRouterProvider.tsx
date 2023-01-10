import * as React from "react";
import { Provider } from "react-redux";
import { ReactNode, ReactPortal } from "react";
import { Store } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { Spinner } from "./ui_kits/Spinner/Spinner.component";

type Children = ReactNode | Array<Children> | ReactPortal;

export interface IChildrenProp {
  children: Children;
}

export interface IElementProps {
  className: string;
}

interface IProps extends IChildrenProp {
  store: Store;
}

/**
 * Responsible for rendering the IntlProvider component
 */
const StateAndRouterProvider: React.FC<IProps> = (props: IProps) => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Provider store={props.store}>
        <BrowserRouter>{props.children}</BrowserRouter>
      </Provider>
    </React.Suspense>
  );
};

export { StateAndRouterProvider };
