import { FC, useEffect } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { ProductItem } from "../../ProductItem/ProductItem";
import { IProductData } from "../../../redux/slices/collection/collection.type";
import { EmptySearchIcon } from "../../../assets/icons/EmptySearch.icon";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchProductsBySearchAsync } from "../../../redux/slices/collection/collection.reducer";
import { productsBySearch } from "../../../redux/slices/collection/collection.selector";
import { Spinner } from "../../../ui_kits/Spinner/Spinner.component";

interface IProps {
  searchValue: string;
}

export const SearchResults: FC<IProps> = (props: IProps) => {
  const { searchValue = "" } = props;

  const debouncedSearchTerm = useDebounce<string>(searchValue, 1000);
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector(productsBySearch);

  const filteredData = data?.productdto || [];

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(
        fetchProductsBySearchAsync({
          input: debouncedSearchTerm,
          offset: 0,
          pagesize: 50,
        })
      );
    }
  }, [debouncedSearchTerm, dispatch]);

  if (loading) {
    return <Spinner />;
  }

  if (!loading && !filteredData?.length) {
    return (
      <div className="Search__NotFound">
        <span className="Search__NotFound--text u-h6 Heading">
          Nothing matches your search
        </span>
        <span>
          <EmptySearchIcon />
        </span>
      </div>
    );
  }

  return (
    <div className="Search__Results">
      <div className="Search__Results--Title Heading u-h5">
        <span className="Text--subdued ">{filteredData?.length} results</span>
      </div>
      <div className="Search__Results--Content">
        {filteredData &&
          filteredData.map((product: IProductData) => (
            <ProductItem key={product.mcId} product={product} />
          ))}
      </div>
    </div>
  );
};
