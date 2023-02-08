import { fetchData } from "../../../services/axios";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { profileService } from "../../../services/axiosServices";
import { ICustomer, IPlan, IProfileState, profileMenu } from "./profile.type";

export const fetchCustomerAsync = createAsyncThunk<ICustomer, string>(
  "profile/getCustomer",
  async (email, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...profileService.getCustomerbyIdEmail,
        params: { phone: email },
      })) as ICustomer;
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchPlansAsync = createAsyncThunk<IPlan[]>(
  "profile/getPlans",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData(profileService.plans)) as IPlan[];
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const profileReducer = {
  setProfilePage: (
    state: IProfileState,
    { payload }: PayloadAction<profileMenu>
  ): void => {
    state.profilePage = payload;
  },
};

export const extraProfileReducer = {
  [fetchCustomerAsync.pending.type]: (state: IProfileState) => {
    state.customer.loading = true;
  },
  [fetchCustomerAsync.fulfilled.type]: (
    state: IProfileState,
    { payload }: PayloadAction<ICustomer>
  ) => {
    state.customer.loading = false;
    state.customer.data = payload;
  },
  [fetchCustomerAsync.rejected.type]: (state: IProfileState) => {
    state.customer.loading = false;
    state.customer.error = "Error while fetching customer data";
  },
  [fetchPlansAsync.pending.type]: (state: IProfileState) => {
    state.plans.loading = true;
  },
  [fetchPlansAsync.fulfilled.type]: (
    state: IProfileState,
    { payload }: PayloadAction<IPlan[]>
  ) => {
    state.plans.loading = false;
    state.plans.data = payload;
  },
  [fetchPlansAsync.rejected.type]: (state: IProfileState) => {
    state.plans.loading = false;
    state.plans.error = "Error while fetching customer data";
  },
};
