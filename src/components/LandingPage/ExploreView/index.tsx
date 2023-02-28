import { ICollection } from "../../../redux/slices/home/home.type";
import { IF } from "../../../ui_kits/IF";
import LazyLoad from "../../../ui_kits/LazyComponent";
import { isEmpty } from "../../../utils/script";
import { Collections } from "../__common__/Collections/Collections";
import { ImageView } from "./ImageView";

interface IProps {
  shopByProductsData: ICollection[] | null;
}

export const ExploreView = (props: IProps) => {
  const { shopByProductsData } = props;

  return (
    <Collections
      heading="Explore"
      subHeading="Ready to take your style to the next level?"
    >
      <IF condition={!isEmpty(shopByProductsData)}>
        {shopByProductsData?.map((item: ICollection, index: number) => (
          <LazyLoad
            tag="div"
            key={index}
            className="Grid__Cell 1/1--phone 1/2--tablet-and-up 1/4--lap-and-up"
          >
            <ImageView collectionItem={item} />
          </LazyLoad>
        ))}
      </IF>
    </Collections>
  );
};
