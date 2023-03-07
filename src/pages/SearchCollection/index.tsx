import React, { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { EmptyProducts } from "../../components/EmptyProducts/EmptyProducts";
import { ProductsList } from "../../components/ProductCollection/ProductList";
import { fetchProductsBySearchAsync } from "../../redux/slices/collection/collection.reducer";
import { productsBySearch } from "../../redux/slices/collection/collection.selector";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Pagination from "../../ui_kits/Pagination/Pagination";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";

export const SearchCollection = () => {
  const dispatch = useAppDispatch();
  const {
    state: { name },
  } = useLocation();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const { data: products, loading } = useAppSelector(productsBySearch);
  const ITEMS_PER_PAGE = 2;

  useEffect(() => {
    dispatch(
      fetchProductsBySearchAsync({
        input: name,
        offset: currentPage - 1,
        pagesize: ITEMS_PER_PAGE,
      })
    );
  }, [dispatch, currentPage, name]);

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
