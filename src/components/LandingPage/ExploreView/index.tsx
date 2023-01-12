import { IF } from "../../../ui_kits/IF";
import LazyLoad from "../../../ui_kits/LazyComponent";
import { isEmpty } from "../../../utils/script";
import { Collections } from "../__common__/Collections/Collections";
import { ImageView } from "./ImageView";
import { ExploreData, IExploreData } from "./mockData";

export const ExploreView = () => {
  const dataSet1 = ExploreData?.slice(0, 1);
  const dataSet2 = ExploreData?.slice(1, 5);

  const dataset = {
    dataSet1,
    dataSet2,
  };

  return (
    <Collections
      heading="Explore"
      subHeading="Ready to take your style to the next level?"
      isNarrow
    >
      <IF condition={!isEmpty(ExploreData)}>
        {Object.entries(dataset).map(([key, value]) => {
          return (
            <LazyLoad
              tag="div"
              className="Grid__Cell 1/2--tablet-and-up"
              style={{ padding: 0 }}
              key={key}
            >
              {value?.map((item: IExploreData, index: number) => (
                <div
                  key={index}
                  className={`Grid__Cell ${
                    key === "dataSet1" ? "" : "1/2--phone 1/2--tablet-and-up"
                  }`}
                >
                  <ImageView collectionItem={item} />
                </div>
              ))}
            </LazyLoad>
          );
        })}
      </IF>
    </Collections>
  );
};
