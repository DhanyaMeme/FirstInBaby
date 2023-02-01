import { useMemo } from "react";
import { EmptyProducts } from "../../components/EmptyProducts/EmptyProducts";
import { ProductsList } from "../../components/ProductCollection/ProductList";
import usePath from "../../hooks/usePath";
import { allProducts } from "../../redux/slices/collection/collection.selector";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { useAppSelector } from "../../redux/store";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";
import { filterItems } from "../../utils/generics";

export const ProductCollection = () => {
  const mainCategory = usePath();

  const { data: products, loading } = useAppSelector(allProducts);

  const filteredData = useMemo(() => {
    let computedData: IProduct[] = products || [];

    if (products) {
      computedData = filterItems(products, {
        maincategory: mainCategory,
      });
    }

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
