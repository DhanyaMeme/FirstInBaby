
import LazyLoad from "../../../ui_kits/LazyComponent";
import { Collections } from "../__common__/Collections/Collections";
import { ImageView } from "./ImageView";
import { CollectionData, ICollectionData } from "./mockdata";

export const CategoriesView = () => {
  return (
    <Collections heading="COLLECTIONS" subHeading="Explore our collectiions">
      {CollectionData.map((item: ICollectionData) => (
        <LazyLoad
          tag="div"
          key={item.title}
          className="Grid__Cell 1/1--phone 1/2--tablet-and-up 1/3--lap-and-up"
        >
          <ImageView collectionItem={item} />
        </LazyLoad>
      ))}
    </Collections>
  );
};
