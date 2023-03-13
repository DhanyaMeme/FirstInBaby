import { createSlice } from "@reduxjs/toolkit";
import { initialAsyncData } from "../../../models/constants";
import {
  collectionReducer,
  extracollectionReducer,
} from "./collection.reducer";
import { ICollectionState, LayoutType } from "./collection.type";

export const initialState: ICollectionState = {
  allProducts: initialAsyncData,
  preorderProducts: initialAsyncData,
  productsByCategory: initialAsyncData,
  productsByShopBy: initialAsyncData,
  productsBySearch: initialAsyncData,
  productsShopByCollection: initialAsyncData,
  layoutType: LayoutType.Multi,
  isSortEnabled: false,
  isFilterEnabled: false,
  selectedSorter: undefined,
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: collectionReducer,
  extraReducers: extracollectionReducer,
});

export const {
  setLayoutType,
  setSorterVisibility,
  setFilterVisibility,
  setSelectedSorter,
} = collectionSlice.actions;
