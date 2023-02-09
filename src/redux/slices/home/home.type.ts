import { AsyncData } from "../../../models/types";
import { IProduct } from "../collection/collection.type";

export interface ICollection {
  name: string;
  id: number;
  url: string;
  murl: string;
}

export interface IShopByProduct {
  id: number;
  name: string;
  url: string;
}

export interface IHomeState {
  shopByCollection: AsyncData<ICollection[]>;
  shopByProducts: AsyncData<Array<IShopByProduct>>;
  hotProducts: AsyncData<Array<IProduct>>;
  featureProducts: AsyncData<Array<IProduct>>;
}
