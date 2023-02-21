import { useEffect } from "react";
import { isEmpty } from "../../utils/script";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchPreorderProductsAsync } from "../../redux/slices/collection/collection.reducer";
import { preorderProducts } from "../../redux/slices/collection/collection.selector";
import { Spinner } from "../../ui_kits/Spinner/Spinner.component";
import { EmptyProducts } from "../../components/EmptyProducts/EmptyProducts";

export const Preorder = () => {
  const { data: products, loading } = useAppSelector(preorderProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isEmpty(products)) {
      dispatch(fetchPreorderProductsAsync());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  console.log("data", products);

  if (loading) {
    return <Spinner />;
  }

  if (!loading && !products) {
    return <EmptyProducts />;
  }

  return <div>PreOrder</div>;
};
