import { createSlice } from "@reduxjs/toolkit";
import { initialAsyncData } from "../../../models/constants";
import {
  collectionReducer,
  extracollectionReducer,
} from "./collection.reducer";
import { ICollectionState } from "./collection.type";

export const initialState: ICollectionState = {
  allProducts: initialAsyncData,
  productsByCategory: initialAsyncData,
  productsByShopBy: initialAsyncData,
  productsBySearch: initialAsyncData,
  productsShopByCollection: initialAsyncData,
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: collectionReducer,
  extraReducers: extracollectionReducer,
});
