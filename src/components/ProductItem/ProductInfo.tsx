import { IProduct } from "../../redux/slices/collection/collection.type";
import { Price } from "../../ui_kits/global/Price.styles";
import { isEmpty } from "../../utils/script";
import { IF } from "../../ui_kits/IF";
import { getOfferPrice } from "../../utils/generics";
import { NavLink } from "react-router-dom";
import { encodeUrl } from "../../utils/textHandler";

interface IProps {
  product: IProduct;
}

export const ProductInfo = (props: IProps) => {
  const { product } = props;
  const { productname, price, offer } = product;

  return (
    <div className="ProductItem__Info">
      <NavLink
        to={`/product/${encodeUrl(product.productname)}/${product.mcId}`}
        className="ProductItem__Title Heading"
      >
        {productname}
      </NavLink>
      <div className="ProductItem__PriceList Heading u-h5">
        <Price highlight>Rs.{price}</Price>
        <IF condition={!isEmpty(offer)}>
          <Price compareAt>Rs.{getOfferPrice(price, offer)}</Price>
        </IF>
      </div>
    </div>
  );
};
