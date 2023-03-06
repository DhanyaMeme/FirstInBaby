import { useEffect, useMemo, useState } from "react";
import { formatPreOrderDate } from "../../utils/script";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchPreorderProductsAsync } from "../../redux/slices/collection/collection.reducer";
import { preorderProducts } from "../../redux/slices/collection/collection.selector";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";
import { EmptyProducts } from "../../components/EmptyProducts/EmptyProducts";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { ProductsList } from "../../components/ProductCollection/ProductList";
import Pagination from "../../ui_kits/Pagination/Pagination";

export const Preorder = () => {
  const dispatch = useAppDispatch();
  const { data: products, loading } = useAppSelector(preorderProducts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const ITEMS_PER_PAGE = 40;

  useEffect(() => {
    dispatch(
      fetchPreorderProductsAsync({
        offset: currentPage - 1,
        pagesize: ITEMS_PER_PAGE,
        date: formatPreOrderDate(),
      })
    );
  }, [dispatch, currentPage]);

  const filteredData = useMemo(() => {
    let computedData: IProduct = products || ({} as IProduct);
    setTotalItems(computedData.pagenumber * ITEMS_PER_PAGE);
    return computedData.productdto || [];
  }, [products, currentPage]);

  if (loading) {
    return <Spinner />;
  }

  if (!loading && filteredData.length === 0) {
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
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
};
