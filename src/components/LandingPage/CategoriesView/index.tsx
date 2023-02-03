import { ICollection } from "../../../redux/slices/home/home.type";
import { IF } from "../../../ui_kits/IF";
import LazyLoad from "../../../ui_kits/LazyComponent";
import { isEmpty } from "../../../utils/script";
import { Collections } from "../__common__/Collections/Collections";
import { ImageView } from "./ImageView";

interface IProps {
  collectionsData: ICollection[] | null;
}

export const CategoriesView = (props: IProps) => {
  const { collectionsData } = props;

  return (
    <Collections
      heading="COLLECTIONS"
      subHeading="Big Bang Deals On Our Favourite Collections!"
    >
      <IF condition={!isEmpty(collectionsData)}>
        {collectionsData?.map((item: ICollection, index: number) => (
          <LazyLoad
            tag="div"
            key={index}
            className="Grid__Cell 1/1--phone 1/2--tablet-and-up 1/3--lap-and-up"
          >
            <ImageView collectionItem={item} />
          </LazyLoad>
        ))}
      </IF>
    </Collections>
  );
};
