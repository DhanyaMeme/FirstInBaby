import { collectionsData } from "../../../mockData/collectionData";
import { IProductData } from "../../../redux/slices/collection/collection.type";
import { IF } from "../../../ui_kits/IF";
import { SectionHeader } from "../../../ui_kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../../ui_kits/Sections/SectionWrapper/SectionWrapper";
import { isEmpty } from "../../../utils/script";
import { InstaFeedItem } from "./InstaFeedItem";
import "./Style.scss";

interface IProps {
  instaData: IProductData[] | undefined;
}

export const InstaFeed = (props: IProps) => {
  let { instaData = [] } = props;

  // const SlicedInstaData = instaData.slice(0, 8) || [];

  instaData = collectionsData.productdto;

  return (
    <section className="Instafeed">
      <SectionWrapper isbordered>
        <SectionHeader
          heading="@FIRSTINCRY"
          subHeading="FOLLOW US & SHOP INSTAGRAM"
        />
        <div className="Instafeed__Container Grid">
          <IF condition={!isEmpty(instaData)}>
            {instaData.map((item: IProductData) => (
              <InstaFeedItem key={item.mcId} instaFeedItem={item} />
            ))}
          </IF>
        </div>
      </SectionWrapper>
    </section>
  );
};
