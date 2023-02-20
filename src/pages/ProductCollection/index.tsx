import { useEffect, useMemo, useState } from "react";
import { EmptyProducts } from "../../components/EmptyProducts/EmptyProducts";
import { ProductsList } from "../../components/ProductCollection/ProductList";
import usePath from "../../hooks/usePath";
import useScrollPosition from "../../hooks/useScrollPosition";
import { fetchProductsByCategoryAsync } from "../../redux/slices/collection/collection.reducer";
import { productsByCategory } from "../../redux/slices/collection/collection.selector";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Pagination from "../../ui_kits/Pagination/Pagination";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";
import { decodeUrl } from "../../utils/textHandler";

export const ProductCollection = () => {
  const mainCategory = usePath();
  const dispatch = useAppDispatch();

  const { data: products, loading } = useAppSelector(productsByCategory);
  const selectedProduct = products || {};

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const ITEMS_PER_PAGE = 40;

  const { scrollTop } = useScrollPosition();

  useEffect(() => {
    if (!Object.hasOwn(selectedProduct, mainCategory)) {
      dispatch(fetchProductsByCategoryAsync(decodeUrl(mainCategory)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, mainCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [mainCategory]);

  const filteredData = useMemo(() => {
    let computedData: IProduct[] = products?.[mainCategory] || [];

    setTotalItems(computedData.length);

    return computedData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [mainCategory, products, currentPage]);

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page);
    scrollTop();
  };

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
        onPageChange={handleOnPageChange}
      />
    </div>
  );
};
