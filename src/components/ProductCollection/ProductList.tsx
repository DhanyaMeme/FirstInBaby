import { FC } from "react";
import { ProductView } from "../../models/constants";
import { IProduct } from "../../redux/slices/collection/collection.type";
import LazyLoad from "../../ui_kits/LazyComponent";
import { ProductItem } from "../ProductItem/ProductItem";

interface IProps {
  ProductData: IProduct[] | null;
}

export const ProductsList: FC<IProps> = (props: IProps) => {
  const { ProductData } = props;
  const selectedView = ProductView["1:1"];

  return (
    <div className="CollectionInner__Products">
      <div
        className="ProductList--grid ProductList--removeMargin Grid"
        data-mobile-count={selectedView["data-mobile-count"]}
        data-desktop-count={selectedView["data-desktop-count"]}
      >
        {ProductData &&
          ProductData.map((product: IProduct) => (
            <LazyLoad
              tag="div"
              key={product.mcId}
              className={selectedView.class}
            >
              <ProductItem
                product={product}
                label={`${product.offer}% OFF`}
                isVisibleFav
              />
            </LazyLoad>
          ))}
      </div>
    </div>
  );
};
