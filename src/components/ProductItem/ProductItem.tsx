import { ProductInfo } from "./ProductInfo";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { AddFavIcon } from "../../assets/icons/AddFav.icon";
import { IF } from "../../ui_kits/IF";
import { ImageWrapper } from "../../ui_kits/ImageWrapper/ImageWrapper";
import { AddToCartIcon } from "../../assets/icons/AddToCart.icon";
import RemoveIcon from "../../assets/icons/Remove.icon";
import { useAppDispatch } from "../../redux/store";
import { openModal } from "../../redux/slices/modal/modal.slice";
import { useProductCRUD } from "../../hooks/useProductCRUD";
import { OnclickEvent } from "../../models/types";
import { Flashsale } from "../FlashSale";
import { Timer } from "../Timer/Timer";
import { isFutureDate } from "../../utils/script";

interface IProps {
  product: IProduct;
  label?: string;
  isVisibleFav?: boolean;
  isVisibleAddCart?: boolean;
  isVisibleRemoveFav?: boolean;
}

export const ProductItem = (props: IProps) => {
  const {
    product,
    label,
    isVisibleFav = false,
    isVisibleAddCart = false,
    isVisibleRemoveFav = false,
  } = props;

  const isValidDate = isFutureDate(product.date);

  const { handleToggleToFav, updateInitialProductVariants } = useProductCRUD();

  const dispatch = useAppDispatch();

  const favToggle = (e: OnclickEvent) => {
    e.preventDefault();
    handleToggleToFav(product.mcId);
  };

  const handleProductAddToCart = () => {
    updateInitialProductVariants(product);
    dispatch(
      openModal({
        modalType: "AddFavToCartModal",
        modalProps: {
          id: product,
        },
      })
    );
  };

  return (
    <div className="ProductItem" id={product.productname}>
      <div className="ProductItem__Wrapper">
        <div className="ProductItem__ImageWrapper">
          <div className="AspectRatio AspectRatio--tall">
            <ImageWrapper
              src={product.imageurl}
              alt={product.productname}
              classes="ProductItem__Image Image--fadeIn"
            />
            <IF condition={isVisibleAddCart}>
              <button
                className="ProductItem__Icon ProductItem__CartIcon"
                onClick={handleProductAddToCart}
              >
                <AddToCartIcon />
              </button>
            </IF>
            <IF condition={isVisibleRemoveFav}>
              <button
                className="ProductItem__Icon ProductItem__RemoveIcon"
                onClick={favToggle}
              >
                <RemoveIcon />
              </button>
            </IF>
          </div>
        </div>

        <IF condition={label !== undefined}>
          <div className="ProductItem__LabelList">
            <span className="ProductItem__Label Heading Text--subdued u-h7">
              {label}
            </span>
          </div>
        </IF>

        <IF condition={isVisibleFav}>
          <button
            className="ProductItem__Icon ProductItem__FavIcon Text--subdued"
            onClick={favToggle}
          >
            <AddFavIcon />
          </button>
        </IF>

        <ProductInfo product={product} />
        {!isValidDate && product.date && <Timer endDate={product.date} />}
      </div>
    </div>
  );
};
