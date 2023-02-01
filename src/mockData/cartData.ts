import { ICartItem } from "../redux/slices/cart/cart.type";

export const cartData: ICartItem[] = [
  {
    id: 1,
    mcId: 1,
    productname: "Men's CPD T-shirt",
    quantity: 2,
    price: 10,
    imageurl:
      "https://nazca-images.s3.ap-south-1.amazonaws.com/products/NSSM22C-CLT002-X.jpg",

    productcolor: "Dark Teal",
    size: "S",
  },
  {
    id: 2,
    mcId: 1,
    productname: "Men's CPD T-shirt",
    quantity: 2,
    price: 10,
    imageurl:
      "https://nazca-images.s3.ap-south-1.amazonaws.com/products/NSSM22C-CLT002-X.jpg",

    productcolor: "Dark Teal",
    size: "XS",
  },
  {
    id: 3,
    mcId: 1,
    productname: "Men's CPD T-shirt",
    quantity: 2,
    price: 10,
    imageurl:
      "https://nazca-images.s3.ap-south-1.amazonaws.com/products/NSSM22C-CLT002-X.jpg",

    productcolor: "Dark Teal",
    size: "M",
  },
];
