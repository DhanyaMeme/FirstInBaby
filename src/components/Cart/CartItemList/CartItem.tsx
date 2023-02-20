import { NavLink } from "react-router-dom";
import { ICartItem } from "../../../redux/slices/cart/cart.type";
import { Price } from "../../../ui_kits/global/Price.styles";
import { encodeUrl } from "../../../utils/textHandler";
import { CartAction } from "./CartAction";
import "./CartItemList.scss";

interface IProps {
  cartItem: ICartItem;
}

export const CartItem = (props: IProps) => {
  const { cartItem } = props;

  return (
    <div className="CartItem">
      <div className="CartItem__ImageWrapper AspectRatio">
        <div className="AspectRatio" style={{ aspectRatio: "0.75" }}>
          <img
            className="CartItem__Image"
            src={cartItem.imageurl}
            alt={cartItem.productname}
          />
        </div>
      </div>
      <div className="CartItem__Info">
        <h2 className="CartItem__Title Heading">
          <NavLink
            to={`/product/${encodeUrl(cartItem.productname)}/${cartItem.mcId}`}
          >
            {cartItem.productname}
          </NavLink>
        </h2>
        <div className="CartItem__Meta Heading Text--subdued">
          <p className="CartItem__Variant">{cartItem.size}</p>
          <div className="CartItem__PriceList">
            <Price>Rs. {cartItem.price}</Price>
          </div>
        </div>
        <CartAction cartItem={cartItem} />
      </div>
      <CartAction cartItem={cartItem} />
      <div
        className="CartItem__LinePriceList Heading Text--subdued"
        style={{ textAlign: "right" }}
      >
        <Price>Rs. {cartItem.quantity * cartItem.price}</Price>
      </div>
    </div>
  );
};
