import { useEffect, useMemo, useState } from "react";
import usePath from "../../hooks/usePath";
import { decodeUrl } from "../../utils/textHandler";
import Pagination from "../../ui_kits/Pagination/Pagination";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { EmptyProducts } from "../../components/EmptyProducts/EmptyProducts";
import { ProductsList } from "../../components/ProductCollection/ProductList";
import { productsByCategory } from "../../redux/slices/collection/collection.selector";
import { fetchProductsByCategoryAsync } from "../../redux/slices/collection/collection.reducer";

export const ProductCollection = () => {
  const mainCategory = usePath();
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(14);
  const { data: products, loading } = useAppSelector(productsByCategory);
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    dispatch(
      fetchProductsByCategoryAsync({
        mt: decodeUrl(mainCategory),
        offset: currentPage - 1,
        pagesize: ITEMS_PER_PAGE,
      })
    );
  }, [dispatch, mainCategory, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [mainCategory]);

  const filteredData = useMemo(() => {
    let computedData: IProduct = products?.[mainCategory] || ({} as IProduct);
    setTotalItems(computedData.pagenumber * ITEMS_PER_PAGE);
    return computedData.productdto || [];
  }, [mainCategory, products, currentPage]);

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
