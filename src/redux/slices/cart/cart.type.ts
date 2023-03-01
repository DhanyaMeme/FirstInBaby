export interface ICartItem {
  id?: number;
  mcId: number;
  productname: string;
  price: number;
  imageurl: string;
  productcolor: string;
  size: string;
  quantity: number;
}

export interface ICartState {
  cartItems: ICartItem[];
  isCartOpen: boolean;
}
