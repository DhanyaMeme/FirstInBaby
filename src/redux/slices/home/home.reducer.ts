import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../../services/axios";
import { homeService } from "../../../services/axiosServices";
import { IProduct } from "../collection/collection.type";
import { ICollection, IHomeState } from "./home.type";

export const fetchShopByCollectionAsync = createAsyncThunk<Array<ICollection>>(
  "home/getCollection",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData(
        homeService.getShopByCollection
      )) as ICollection[];
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchHotDealsCollectionAsync = createAsyncThunk<
  Array<ICollection>
>("home/getHotDeals", async (_arg, { rejectWithValue }) => {
  try {
    const response = (await fetchData(
      homeService.getHotDealsCollection
    )) as ICollection[];
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const fetchShopByPdtsAsync = createAsyncThunk<Array<ICollection>>(
  "home/getShopByCollection",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData(
        homeService.getShopByProducts
      )) as ICollection[];
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// FeaturePrroduct

export const fetchFeaturePdtsAsync = createAsyncThunk<IProduct, string>(
  "home/getFeature",
  async (code, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...homeService.getFeatureProducts,
        params: {
          collection: code,
          offset: 0,
          pagesize: 10,
        },
      })) as IProduct;
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchFeaturedCollectionAsync = createAsyncThunk<
  Array<ICollection>
>("home/getFeaturedCollection", async (_arg, { rejectWithValue, dispatch }) => {
  try {
    const response = (await fetchData(
      homeService.getFeaturedCollection
    )) as ICollection[];
    await dispatch(fetchFeaturePdtsAsync(response[0].code));
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

// hotsale

export const fetchHotSaleProductsAsync = createAsyncThunk<IProduct>(
  "home/getHotSale",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...homeService.getProductsHot,
        params: {
          collection: "hotsale",
          offset: 0,
          pagesize: 6,
        },
      })) as IProduct;
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchHotSaleCollectionAsync = createAsyncThunk<Array<ICollection>>(
  "home/getFeaturedCollection",
  async (_arg, { rejectWithValue, dispatch }) => {
    try {
      const response = (await fetchData(
        homeService.getFeaturedCollection
      )) as ICollection[];
      await dispatch(fetchFeaturePdtsAsync(response[0].code));
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);



export const fetchInstaPdtsAsync = createAsyncThunk<IProduct>(
  "home/getInsta",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...homeService.getInstaFeedProducts,
        params: {
          collection: "instafeed",
          offset: 0,
          pagesize: 8,
        },
      })) as IProduct;
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const homeReducer = {};

export const extraHomeReducer = {
  [fetchShopByCollectionAsync.pending.type]: (state: IHomeState) => {
    state.shopByCollection.loading = true;
  },
  [fetchShopByCollectionAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<Array<ICollection>>
  ) => {
    state.shopByCollection.loading = false;
    state.shopByCollection.data = payload;
  },
  [fetchShopByCollectionAsync.rejected.type]: (state: IHomeState) => {
    state.shopByCollection.loading = false;
    state.shopByCollection.error = "Error while fetching collection data";
  },
  [fetchHotDealsCollectionAsync.pending.type]: (state: IHomeState) => {
    state.hotDealsCollection.loading = true;
  },
  [fetchHotDealsCollectionAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<Array<ICollection>>
  ) => {
    state.hotDealsCollection.loading = false;
    state.hotDealsCollection.data = payload;
  },
  [fetchHotDealsCollectionAsync.rejected.type]: (state: IHomeState) => {
    state.hotDealsCollection.loading = false;
    state.hotDealsCollection.error = "Error while fetching hotdeals collection";
  },
  [fetchShopByPdtsAsync.pending.type]: (state: IHomeState) => {
    state.shopByProducts.loading = true;
  },
  [fetchShopByPdtsAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<Array<ICollection>>
  ) => {
    state.shopByProducts.loading = false;
    state.shopByProducts.data = payload;
  },
  [fetchShopByPdtsAsync.rejected.type]: (state: IHomeState) => {
    state.shopByProducts.loading = false;
    state.shopByProducts.error = "Error while fetching shopby products data";
  },
  [fetchHotSaleProductsAsync.pending.type]: (state: IHomeState) => {
    state.hotProducts.loading = true;
  },
  [fetchHotSaleProductsAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<IProduct>
  ) => {
    state.hotProducts.loading = false;
    state.hotProducts.data = payload;
  },
  [fetchHotSaleProductsAsync.rejected.type]: (state: IHomeState) => {
    state.hotProducts.loading = false;
    state.hotProducts.error = "Error while fetching hot sale products";
  },
  [fetchFeaturePdtsAsync.pending.type]: (state: IHomeState) => {
    state.featureProducts.loading = true;
  },
  [fetchFeaturePdtsAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<IProduct>
  ) => {
    state.featureProducts.loading = false;
    state.featureProducts.data = payload;
  },
  [fetchFeaturePdtsAsync.rejected.type]: (state: IHomeState) => {
    state.featureProducts.loading = false;
    state.featureProducts.error = "Error while fetching feature products";
  },
  [fetchInstaPdtsAsync.pending.type]: (state: IHomeState) => {
    state.instaProducts.loading = true;
  },
  [fetchInstaPdtsAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<IProduct>
  ) => {
    state.instaProducts.loading = false;
    state.instaProducts.data = payload;
  },
  [fetchInstaPdtsAsync.rejected.type]: (state: IHomeState) => {
    state.instaProducts.loading = false;
    state.instaProducts.error = "Error while fetching insta products";
  },
};
