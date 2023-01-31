import { AsyncData } from "../../../models/types";

export interface ISubCategory {
  id: number;
  maincatId: number;
  // subcategoryname: number;
  mainCatName: string;
  imageUrl: string;
  // image1: string;
  // image2: string;
  // image3: string;
}

type MainCategoryPreview = Omit<ISubCategory, "subcategoryname">;

export interface IMainCategory extends MainCategoryPreview {
  // subcategory: ISubCategory[];
}

export interface INavState {
  categories: AsyncData<IMainCategory[]>;
  isMenuDrawHidden: boolean;
  isSearchDrawHidden: boolean;
  searchText: string | undefined;
}
