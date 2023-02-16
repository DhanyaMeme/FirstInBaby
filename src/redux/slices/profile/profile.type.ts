import { AsyncData } from "../../../models/types";
import { IAddress } from "../address/address.type";

export enum profileMenu {
  "home" = "Profile Home",
  "profile" = "My Profile",
  "orders" = "My Orders",
  "address" = "My Address",
  "subscribe" = "subscribe",
  "refer_earn" = "REFER AND EARN",
  "help" = "Help",
  "coupons" = "My Coupons",
  "rewards" = "My Rewards",
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

export interface IPlan {
  planID: number;
  planName: string;
  planAmount: number;
  bonusPercentage: number;
  imageUrl: string;
}

export interface IOrderItem {
  id: number;
  orderItemId: number;
  name: string;
  quantity: number;
  subt: number;
  itemType: string;
  size: string;
  color: null | string;
  imgUrl: string;
  taxAmount: number;
  deliveryCharge: number;
  orderId: number;
}

export interface IOrder {
  id: number;
  orderId: number;
  paymentStatus: string;
  ordercode: any;
  userId: string;
  addId: number;
  shopId: string;
  items: IOrderItem[];
  price: number;
  date: string;
  name: string;
  phone: string;
  flatNo: string;
  landMark: string;
  city: string;
  pin: string;
  orderStatus: {
    id: number;
    status: string;
    sPhone: string;
    orders: number;
  };
  street: string;
}

export interface IProfileState {
  profilePage: profileMenu;
  customer: AsyncData<ICustomer>;
  plans: AsyncData<IPlan[]>;
  orders: AsyncData<IOrder[]>;
}
