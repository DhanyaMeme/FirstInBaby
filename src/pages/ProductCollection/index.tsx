import { useEffect, useMemo } from "react";
import { EmptyProducts } from "../../components/EmptyProducts/EmptyProducts";
import { ProductsList } from "../../components/ProductCollection/ProductList";
import usePath from "../../hooks/usePath";
import { fetchProductsByCategoryAsync } from "../../redux/slices/collection/collection.reducer";
import { productsByCategory } from "../../redux/slices/collection/collection.selector";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";
import { decodeUrl } from "../../utils/textHandler";

export const ProductCollection = () => {
  const mainCategory = usePath();
  const dispatch = useAppDispatch();

  const { data: products, loading } = useAppSelector(productsByCategory);

  const selectedProduct = products || {};

  useEffect(() => {
    if (!Object.hasOwn(selectedProduct, mainCategory)) {
      dispatch(fetchProductsByCategoryAsync(decodeUrl(mainCategory)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, mainCategory]);

  const filteredData = useMemo(() => {
    let computedData: IProduct[] = products?.[mainCategory] || [];
    return computedData;
  }, [mainCategory, products]);

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
    </div>
  );
};
