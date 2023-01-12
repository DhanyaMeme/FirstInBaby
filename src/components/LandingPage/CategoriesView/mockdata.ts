import { Coords, Dresses, Footwear, Mens, NewArraivals, Tops } from "../../../assets/images/collections";


export interface ICollectionData {
  subHead: string;
  title: string;
  imageUrl: string;
}

export const CollectionData: ICollectionData[] = [
  {
    subHead: "Best Summer Collection",
    title: "Dresses",
    imageUrl: Dresses,
  },
  {
    subHead: "Funky Summer Wear",
    title: "Men's Wear",
    imageUrl: Mens,
  },
  {
    subHead: "Bestselling Collection",
    title: "Tops and Maxi Dresses",
    imageUrl: Tops,
  },
  {
    subHead: "Simply Wow !",
    title: "Coord Sets",
    imageUrl: Coords,
  },
  {
    subHead: "The Poshaffair",
    title: "Footwear",
    imageUrl: Footwear,
  },
  {
    subHead: "Fresh from our Creative Closet",
    title: "New Arrivals",
    imageUrl: NewArraivals,
  },
];
