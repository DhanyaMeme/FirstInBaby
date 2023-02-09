import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const navSelf = (state: RootState) => state.home;

export const shopByCollection = createSelector(
  navSelf,
  (state) => state && state.shopByCollection
);

export const shopByProducts = createSelector(
  navSelf,
  (state) => state && state.shopByProducts
);

export const hotProducts = createSelector(
  navSelf,
  (state) => state && state.hotProducts
);

export const featureProducts = createSelector(
  navSelf,
  (state) => state && state.featureProducts
);
