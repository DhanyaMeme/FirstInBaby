import { IProduct } from "../../../redux/slices/collection/collection.type";
import { IF } from "../../../ui_kits/IF";
import { isEmpty } from "../../../utils/script";
import { Collections } from "../__common__/Collections/Collections";
import { FeatureProduct } from "../__common__/FeatureProduct/FeatureProduct";

interface IProps {
  saleData: IProduct[] | undefined;
}

export const SaleItem = (props: IProps) => {
  const { saleData = [] } = props;

  return (
    <Collections heading="Sale item of the Week!!" isNarrow>
      <IF condition={!isEmpty(saleData)}>
        {saleData.map((pdt: IProduct) => (
          <div className="Grid__Cell  1/3--tablet-and-up" key={pdt.id}>
            <FeatureProduct
              url={pdt.imageurl}
              title={pdt.productname}
              price={pdt.price}
              isVisibleSaleLabel={true}
            />
          </div>
        ))}
      </IF>
    </Collections>
  );
};
