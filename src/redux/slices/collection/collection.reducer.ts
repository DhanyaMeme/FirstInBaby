import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../../services/axios";
import { productService } from "../../../services/axiosServices";
import { ICollectionState, IProduct } from "./collection.type";

export const fetchAllProductsAsync = createAsyncThunk(
  "collection/getAllProducts",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = await fetchData(productService.getAllProducts);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchProductsByCategoryAsync = createAsyncThunk<any, string>(
  "collection/getProductsByCategory",
  async (mt, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...productService.getProductsByCategory,
        params: { mt },
      })) as IProduct[];

      console.log(mt);

      return {
        key: mt,
        value: response,
      };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const collectionReducer = {};

export const extracollectionReducer = {
  [fetchAllProductsAsync.pending.type]: (state: ICollectionState) => {
    state.allProducts.loading = true;
  },
  [fetchAllProductsAsync.fulfilled.type]: (
    state: ICollectionState,
    { payload }: PayloadAction<Array<IProduct>>
  ) => {
    state.allProducts.loading = false;
    state.allProducts.data = payload;
  },
  [fetchAllProductsAsync.rejected.type]: (state: ICollectionState) => {
    state.allProducts.loading = false;
    state.allProducts.error = "Error while fetching collections";
  },
  [fetchProductsByCategoryAsync.pending.type]: (state: ICollectionState) => {
    state.productsByCategory.loading = true;
  },
  [fetchProductsByCategoryAsync.fulfilled.type]: (
    state: ICollectionState,
    {
      payload,
    }: PayloadAction<{
      key: string;
      value: IProduct[];
    }>
  ) => {
    state.productsByCategory.loading = false;
    const data = state.productsByCategory.data || {};
    const groupedProducts = {
      ...data,
      [payload.key]: payload.value,
    };
    state.productsByCategory.data = groupedProducts;
  },
  [fetchProductsByCategoryAsync.rejected.type]: (state: ICollectionState) => {
    state.productsByCategory.loading = false;
    state.productsByCategory.error =
      "Error while fetching products by category";
  },
};
