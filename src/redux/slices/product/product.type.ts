import { AsyncData } from "../../../models/types";
import { IProduct } from "../collection/collection.type";

export interface IProductVariants {
  id?: number;
  mcId: number;
  productname: string;
  price: number;
  imageurl: string;
  productcolor: string;
  size: string;
  quantity: number;
}

export interface IProductState {
  isVisibleSizechart: boolean;
  selectedProduct: AsyncData<IProduct>;
  productVariants: IProductVariants | undefined;
  isReviewEnabled: boolean;
}
