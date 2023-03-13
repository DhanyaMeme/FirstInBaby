import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const productSelf = (state: RootState) => state.collection;

export const allProducts = createSelector(
  [productSelf],
  (product) => product.allProducts
);

export const preorderProducts = createSelector(
  [productSelf],
  (product) => product.preorderProducts
);

export const productsByCategory = createSelector(
  [productSelf],
  (product) => product.productsByCategory
);

export const productsByShopBy = createSelector(
  [productSelf],
  (product) => product.productsByShopBy
);

export const productsShopByCollection = createSelector(
  [productSelf],
  (product) => product.productsShopByCollection
);

export const productsBySearch = createSelector(
  [productSelf],
  (product) => product.productsBySearch
);

export const layoutType = createSelector(
  [productSelf],
  (product) => product.layoutType
);
