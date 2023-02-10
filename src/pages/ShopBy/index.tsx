import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { EmptyProducts } from "../../components/EmptyProducts/EmptyProducts";
import { ProductsList } from "../../components/ProductCollection/ProductList";
import { fetchProductsByShopbyAsync } from "../../redux/slices/collection/collection.reducer";
import { productsByShopBy } from "../../redux/slices/collection/collection.selector";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { shopByProducts } from "../../redux/slices/home/home.selector";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";
import { decodeUrl, encodeUrl } from "../../utils/textHandler";

export const ShopBy = () => {
  const dispatch = useAppDispatch();
  let { name, id: mainCategory = "" } = useParams();

  const { data: products, loading } = useAppSelector(productsByShopBy);

  const selectedProduct = products || {};

  useEffect(() => {
    if (!Object.hasOwn(selectedProduct, mainCategory)) {
      dispatch(fetchProductsByShopbyAsync(decodeUrl(mainCategory)));
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
