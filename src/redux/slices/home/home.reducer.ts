import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../../services/axios";
import { homeService } from "../../../services/axiosServices";
import { IProduct } from "../collection/collection.type";
import { ICollection, IHomeState, ProductsEnum } from "./home.type";

export const fetchCollectionAsync = createAsyncThunk<Array<ICollection>>(
  "home/getCollection",
  async (type, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...homeService.Collection,
        // params: { type },
      })) as ICollection[];
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchHotAsync = createAsyncThunk<Array<IProduct>>(
  "home/getHot",
  async (type, { rejectWithValue }) => {
    try {
      const response = (await fetchData(
        homeService.getProductsHot
      )) as IProduct[];
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);


export const homeReducer = {};

export const extraHomeReducer = {
  [fetchCollectionAsync.pending.type]: (state: IHomeState) => {
    state.collection.loading = true;
  },
  [fetchCollectionAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<Array<ICollection>>
  ) => {
    state.collection.loading = false;
    state.collection.data = payload;
  },
  [fetchCollectionAsync.rejected.type]: (state: IHomeState) => {
    state.collection.loading = false;
    state.collection.error = "Error while fetching collection data";
  },
  [fetchHotAsync.pending.type]: (state: IHomeState) => {
    state.hotProducts.loading = true;
  },
  [fetchHotAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<Array<IProduct>>
  ) => {
    state.hotProducts.loading = false;
    state.hotProducts.data = payload;
  },
  [fetchHotAsync.rejected.type]: (state: IHomeState) => {
    state.hotProducts.loading = false;
    state.hotProducts.error = "Error while fetching collection data";
  },
};
