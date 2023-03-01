import { createAsyncThunk, current, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../../services/axios";
import { productService } from "../../../services/axiosServices";
import { formatPreOrderDate } from "../../../utils/script";
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

export const fetchPreorderProductsAsync = createAsyncThunk<IProduct[]>(
  "collection/getPreOrderProducts",
  async (_arg, { rejectWithValue }) => {
    try {
      const currentDate = formatPreOrderDate();
      const response = (await fetchData({
        ...productService.getPreOrderProducts,
        params: { curDate: currentDate },
      })) as IProduct[];
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchProductsByCategoryAsync = createAsyncThunk<any, any>(
  "collection/getProductsByCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...productService.getProductsByCategory,
        params: data,
      })) as IProduct[];

      return {
        key: data.mt,
        value: response,
      };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchProductsByShopbyAsync = createAsyncThunk<any, string>(
  "collection/getProductsByShopby",
  async (product, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...productService.getProductsByShopby,
        params: { product },
      })) as IProduct[];

      return {
        key: product,
        value: response,
      };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchProductsBySearchAsync = createAsyncThunk<IProduct[], string>(
  "collection/getProductsBySearch",
  async (productname, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...productService.getProductsByShopby,
        params: { productname },
      })) as IProduct[];

      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchShopbyCollectionAsync = createAsyncThunk<any, string>(
  "collection/getProductsByShopbyCollection",
  async (collection, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...productService.getProductsByCollection,
        params: { collection },
      })) as IProduct[];

      return {
        key: collection,
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
    state.allProducts.error = "Error while fetching all products";
  },

  [fetchPreorderProductsAsync.pending.type]: (state: ICollectionState) => {
    state.preorderProducts.loading = true;
  },
  [fetchPreorderProductsAsync.fulfilled.type]: (
    state: ICollectionState,
    { payload }: PayloadAction<Array<IProduct>>
  ) => {
    state.preorderProducts.loading = false;
    state.preorderProducts.data = payload;
  },
  [fetchPreorderProductsAsync.rejected.type]: (state: ICollectionState) => {
    state.preorderProducts.loading = false;
    state.preorderProducts.error = "Error while fetching preorder products";
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

  [fetchProductsByShopbyAsync.pending.type]: (state: ICollectionState) => {
    state.productsByShopBy.loading = true;
  },
  [fetchProductsByShopbyAsync.fulfilled.type]: (
    state: ICollectionState,
    {
      payload,
    }: PayloadAction<{
      key: string;
      value: IProduct[];
    }>
  ) => {
    state.productsByShopBy.loading = false;
    const data = state.productsByShopBy.data || {};
    const groupedProducts = {
      ...data,
      [payload.key]: payload.value,
    };
    state.productsByShopBy.data = groupedProducts;
  },
  [fetchProductsByShopbyAsync.rejected.type]: (state: ICollectionState) => {
    state.productsByShopBy.loading = false;
    state.productsByShopBy.error = "Error while fetching products by shopby";
  },
  [fetchProductsBySearchAsync.pending.type]: (state: ICollectionState) => {
    state.productsBySearch.loading = true;
  },
  [fetchProductsBySearchAsync.fulfilled.type]: (
    state: ICollectionState,
    { payload }: PayloadAction<Array<IProduct>>
  ) => {
    state.productsBySearch.loading = false;
    state.productsBySearch.data = payload;
  },
  [fetchProductsBySearchAsync.rejected.type]: (state: ICollectionState) => {
    state.productsBySearch.loading = false;
    state.productsBySearch.error = "Error while fetching products by search";
  },
  [fetchShopbyCollectionAsync.pending.type]: (state: ICollectionState) => {
    state.productsShopByCollection.loading = true;
  },
  [fetchShopbyCollectionAsync.fulfilled.type]: (
    state: ICollectionState,
    {
      payload,
    }: PayloadAction<{
      key: string;
      value: IProduct[];
    }>
  ) => {
    state.productsShopByCollection.loading = false;
    const data = state.productsShopByCollection.data || {};
    const groupedProducts = {
      ...data,
      [payload.key]: payload.value,
    };
    state.productsShopByCollection.data = groupedProducts;
  },
  [fetchShopbyCollectionAsync.rejected.type]: (state: ICollectionState) => {
    state.productsShopByCollection.loading = false;
    state.productsShopByCollection.error =
      "Error while fetching products by shopby collection";
  },
};
