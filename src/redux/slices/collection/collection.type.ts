import { AsyncData } from "../../../models/types";

export interface IProductImage {
  id: number;
  imId: number;
  imageUrl: string;
  mcId: number;
}

export interface IProductSize {
  id: number;
  sid: number;
  psize: string;
  price: number;
  sku: string;
  qty: number;
  length: number;
  width: number;
  height: number;
  mcId: number;
}

export interface IProductSpecification {
  id: number;
  spid: number;
  specification: string;
  mcId: number;
}

export interface IProductReview {
  description: string;
  imageUrl: string;
  rating: number;
  rid: number;
  titile: string;
  userid: number;
  username: string;
}

export interface IProduct {
  id: number;
  brand: string;
  childcategory: string;
  date: string;
  deliveryTime: string;
  descpription: string;
  descpription1: string;
  fabric: string;
  group: string;
  gsthsn: string;
  imageurl: string;
  maincategory: string;
  mcId: number;
  metatags: any[];
  minqty: number;
  offer: number;
  phone: string;
  pntw: string;
  price: number;
  productImages: IProductImage[];
  productSize: IProductSize[];
  productSpecs: IProductSpecification[];
  productcode: string;
  productcolor: string;
  productname: string;
  quantity: string;
  // ratings: [
  //   {
  //     numbers: number;
  //     rating: number;
  //     ratingid: number;
  //   }
  // ];
  // reviews: [
  //   {
  //     dislike: number;
  //     like: number;
  //     name: string;
  //     rating: number;
  //     reviews: string;
  //     rid: number;
  //     start: number;
  //     url: string;
  //   }
  // ];
  ratings: any[];
  reviews: any[];
  shopbyproducts: string;
  sizechart: string;
  subcategory: string;
  subcategory1: string;
  tax: number;
}

export interface ICollectionState {
  allProducts: AsyncData<IProduct[]>;
}
