import { useNavigate } from "react-router-dom";
import emptyCart from "../../assets/images/EmptyCart.png";
import "./EmptyCart.scss";

function EmptyCart() {
  return (
    <section className="empty-container">
      <img src={emptyCart} alt="Empty Cart" className="empty-cart-image" />
      <h2 className="empty-cart-head Heading u-h3">
        Your shopping bag is empty!
      </h2>
      <br />
      <p className="empty-cart-sub u-h4">
        Looks like you haven’t added anything to your bag. Let’s change that.
      </p>
    </section>
  );
}

export default EmptyCart;
