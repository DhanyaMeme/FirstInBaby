import { AsyncData } from "../../../models/types";
import { IProduct, IProductData } from "../collection/collection.type";

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
  selectedProduct: AsyncData<IProductData>;
  productVariants: IProductVariants | undefined;
  isReviewEnabled: boolean;
}
