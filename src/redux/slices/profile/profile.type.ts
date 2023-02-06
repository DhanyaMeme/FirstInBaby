import { AsyncData } from "../../../models/types";
import { IAddress } from "../address/address.type";

export enum profileMenu {
  "home" = "Profile Home",
  "profile" = "My Profile",
  "orders" = "My Orders",
  "address" = "My Address",
  "coupons" = "My Coupons",
  "rewards" = "My Rewards",
  "help" = "Help",
}

export interface ICustomer {
  userid: number;
  uPhone: string;
  fname: string;
  lname: string;
  iUmg: string;
  email: string;
  userReferral: string;
  affiliateCode: string;
  password: string;
  address: IAddress[];
  enabled: boolean;
}

export interface IProfileState {
  profilePage: profileMenu;
  customer: AsyncData<ICustomer>;
}
