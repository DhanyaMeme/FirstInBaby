import { ProductInfo } from "./ProductInfo";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { AddFavIcon } from "../../assets/icons/AddFav.icon";
import { IF } from "../../ui_kits/IF";
import { ImageWrapper } from "../../ui_kits/ImageWrapper/ImageWrapper";
import { AddToCartIcon } from "../../assets/icons/AddToCart.icon";
import RemoveIcon from "../../assets/icons/Remove.icon";

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

  // const { addToFav } = useWishlistHook();

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
              <button className="ProductItem__Icon ProductItem__CartIcon">
                <AddToCartIcon />
              </button>
            </IF>
            <IF condition={isVisibleRemoveFav}>
              <button className="ProductItem__Icon ProductItem__RemoveIcon">
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
          <button className="ProductItem__Icon ProductItem__FavIcon Text--subdued">
            <AddFavIcon />
          </button>
        </IF>

        <ProductInfo product={product} />
      </div>
    </div>
  );
};
