import { FC, useEffect, useMemo, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import { ProductView } from "../../models/constants";
import { IProduct } from "../../redux/slices/collection/collection.type";
import LazyLoad from "../../ui_kits/LazyComponent";
import Pagination from "../../ui_kits/Pagination/Pagination";
import { ProductItem } from "../ProductItem/ProductItem";

interface IProps {
  ProductData: IProduct[] | null;
}

export const ProductsList: FC<IProps> = (props: IProps) => {
  const { ProductData } = props;
  const selectedView = ProductView["4:4"];

  const { scrollTop } = useScrollPosition();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [ProductData]);

  const filteredData = useMemo(() => {
    let computedData: IProduct[] = ProductData || [];
    setTotalItems(computedData.length);

    //Paginating computedData
    return computedData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [ProductData, currentPage]);

  return (
    <div className="CollectionInner__Products">
      <div
        className="ProductList--grid ProductList--removeMargin Grid"
        data-mobile-count={selectedView["data-mobile-count"]}
        data-desktop-count={selectedView["data-desktop-count"]}
      >
        {filteredData &&
          filteredData.map((product: IProduct) => (
            <LazyLoad tag="div" key={product.id} className={selectedView.class}>
              <ProductItem
                product={product}
                label={`${product.offer}% OFF`}
                isVisibleFav
              />
            </LazyLoad>
          ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={totalItems}
        pageSize={ITEMS_PER_PAGE}
        onPageChange={(page: number) => {
          setCurrentPage(page);
          scrollTop();
        }}
      />
    </div>
  );
};
