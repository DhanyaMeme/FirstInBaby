import { useEffect, useMemo, useState } from "react";
import { isEmpty } from "../../utils/script";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchPreorderProductsAsync } from "../../redux/slices/collection/collection.reducer";
import { preorderProducts } from "../../redux/slices/collection/collection.selector";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";
import { EmptyProducts } from "../../components/EmptyProducts/EmptyProducts";
import { IProduct } from "../../redux/slices/collection/collection.type";
import useScrollPosition from "../../hooks/useScrollPosition";
import { ProductsList } from "../../components/ProductCollection/ProductList";
import Pagination from "../../ui_kits/Pagination/Pagination";

export const Preorder = () => {
  const { data: products, loading } = useAppSelector(preorderProducts);
  const dispatch = useAppDispatch();
  const { scrollTop } = useScrollPosition();

  useEffect(() => {
    if (isEmpty(products)) {
      dispatch(fetchPreorderProductsAsync());
    }
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const ITEMS_PER_PAGE = 40;

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page);
    scrollTop();
  };

  const filteredData = useMemo(() => {
    let computedData: IProduct[] = products || [];

    setTotalItems(computedData.length);

    return computedData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [products, currentPage]);

  if (loading) {
    return <Spinner />;
  }

  if (!loading && !products) {
    return <EmptyProducts />;
  }

  return (
    <div className="CollectionMain">
      <div className="CollectionInner">
        <ProductsList ProductData={filteredData} />
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={totalItems}
        pageSize={ITEMS_PER_PAGE}
        onPageChange={handleOnPageChange}
      />
    </div>
  );
};
