import { Fragment } from "react";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { products } from "../../mockData/productData";
import { IProduct } from "../../redux/slices/collection/collection.type";
import LazyLoad from "../../ui_kits/LazyComponent";

export const Wishlist = () => {
  return (
    <Fragment>
      <div className="CollectionInner">
        <div className="CollectionInner__Products">
          <div
            className="ProductList--grid ProductList--removeMargin Grid"
            data-mobile-count={2}
            data-desktop-count={4}
          >
            {products?.map((product: IProduct) => (
              <LazyLoad
                tag="div"
                key={product.id}
                className="Grid__Cell 1/2--phone 1/3--tablet-and-up 1/4--desk"
              >
                <ProductItem
                  product={product}
                  isVisibleAddCart
                  isVisibleRemoveFav
                />
              </LazyLoad>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
