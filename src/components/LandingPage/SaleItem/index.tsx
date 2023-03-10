import { collectionsData } from "../../../mockData/collectionData";
import { IProductData } from "../../../redux/slices/collection/collection.type";
import { IF } from "../../../ui_kits/IF";
import { isEmpty } from "../../../utils/script";
import { Collections } from "../__common__/Collections/Collections";
import { FeatureProduct } from "../__common__/FeatureProduct/FeatureProduct";

interface IProps {
  saleData: IProductData[] | undefined;
}

export const SaleItem = (props: IProps) => {
  let { saleData = [] } = props;

  saleData = collectionsData.productdto;

  return (
    <Collections heading="Sale item of the Week!!">
      <IF condition={!isEmpty(saleData)}>
        {saleData.map((pdt: IProductData) => (
          <div className="Grid__Cell  1/3--tablet-and-up" key={pdt.mcId}>
            <FeatureProduct
              url={pdt.imageurl}
              title={pdt.productname}
              price={pdt.price}
              mcId={pdt.mcId}
              isVisibleSaleLabel={true}
            />
          </div>
        ))}
      </IF>
    </Collections>
  );
};
