import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const productSelf = (state: RootState) => state.collection;

export const allProducts = createSelector(
  [productSelf],
  (product) => product.allProducts
);

export const productsByCategory = createSelector(
  [productSelf],
  (product) => product.productsByCategory
);
