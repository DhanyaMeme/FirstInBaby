import { IProduct } from "../../redux/slices/collection/collection.type";
import { Price } from "../../ui_kits/global/Price.styles";
import { isEmpty } from "../../utils/script";
import { IF } from "../../ui_kits/IF";
import { getOfferPrice } from "../../utils/generics";

interface IProps {
  product: IProduct;
}

export const ProductInfo = (props: IProps) => {
  const { product } = props;
  const { productname, price, offer } = product;

  return (
    <div className="ProductItem__Info">
      <h5 className="ProductItem__Title Heading">{productname}</h5>
      <div className="ProductItem__PriceList Heading u-h5">
        <Price highlight>Rs.{price}</Price>
        <IF condition={!isEmpty(offer)}>
          <Price compareAt>Rs.{getOfferPrice(price, offer)}</Price>
        </IF>
      </div>
    </div>
  );
};
