import { createSlice } from "@reduxjs/toolkit";
import { initialAsyncData } from "../../../models/constants";
import { extraHomeReducer, homeReducer } from "./home.reducer";
import { IHomeState } from "./home.type";

export const initialState: IHomeState = {
  shopByCollection: initialAsyncData,
  hotProducts: initialAsyncData,
  featureProducts: initialAsyncData,
  shopByProducts: initialAsyncData,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: homeReducer,
  extraReducers: extraHomeReducer,
});
