import { FC, useEffect } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { ProductItem } from "../../ProductItem/ProductItem";
import { IProductData } from "../../../redux/slices/collection/collection.type";
import { EmptySearchIcon } from "../../../assets/icons/EmptySearch.icon";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchProductsBySearchAsync } from "../../../redux/slices/collection/collection.reducer";
import { productsBySearch } from "../../../redux/slices/collection/collection.selector";
import { Spinner } from "../../../ui_kits/Spinner/Spinner.component";
import { NavLink, useNavigate } from "react-router-dom";
import { setSearchDrawHidden } from "../../../redux/slices/nav/nav.slice";

interface IProps {
  searchValue: string;
}

export const SearchResults: FC<IProps> = (props: IProps) => {
  const { searchValue = "" } = props;

  const debouncedSearchTerm = useDebounce<string>(searchValue, 1000);
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector(productsBySearch);
  const filteredData = data?.productdto.slice(0, 3) || [];
  const navigate = useNavigate();

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

  const handleSearchOnclick = () => {
    navigate("/search");
    dispatch(setSearchDrawHidden(true));
  };

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
        <span
          className="Text--subdued Link Link--primary"
          onClick={handleSearchOnclick}
        >
          View All
        </span>
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
