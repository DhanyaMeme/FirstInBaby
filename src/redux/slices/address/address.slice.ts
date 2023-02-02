import { createSlice } from "@reduxjs/toolkit";
import { initialAsyncData } from "../../../models/constants";
import { addressReducer, extraAddressReducer } from "./address.reducer";
import { IAddressState } from "./address.type";

export const initialState: IAddressState = {
  addresses: [],
  addressData: initialAsyncData,
  openAddAddress: false,
  selectedAddressId: undefined,
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: addressReducer,
  extraReducers: extraAddressReducer,
});

export const {
  setAddresses,
  addNewAddress,
  removeAddress,
  setOpenAddAddress,
  setDefaultAddress,
  setSelectedAddressId,
} = addressSlice.actions;
