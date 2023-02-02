import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../../services/axios";
import { addressService } from "../../../services/axiosServices";
import toastMessage from "../../../utils/toastMessage";

export const fetchAddressAsync = createAsyncThunk<any, any>(
  "fav/getToFav",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetchData({
        ...addressService.getAddress,
        params: data,
      });
      console.log("response", response);
      return response;
    } catch (err) {
      console.log("response", err);
      return rejectWithValue(err);
    }
  }
);

export const addAddressAsync = createAsyncThunk<any, any>(
  "fav/addToFav",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchData({
        ...addressService.addAddress,
        params: data.address,
      });
      toastMessage("Added Address", "success");
      dispatch(fetchAddressAsync({ phone: data.user }));
      return response;
    } catch (err) {
      toastMessage("Something went wrong, Try again", "error");
      return rejectWithValue(err);
    }
  }
);
