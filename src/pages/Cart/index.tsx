import CartFooter from "../../components/Cart/CartFooter/CartFooter";
import CartItemList from "../../components/Cart/CartItemList/CartItemList";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { selectCartItems } from "../../redux/slices/cart/cart.selector";
import { useAppSelector } from "../../redux/store";
import { Container } from "../../ui_kits/global/Container.styles";
import { PageHeader } from "../../ui_kits/global/PageContent.styles";

const Cart = () => {
  const cartList = useAppSelector(selectCartItems);

  if (!cartList.length) {
    return <EmptyCart />;
  }

  return (
    <Container isNarrow>
      <PageHeader>
        <h3 className="Heading Text--alignCenter">My Cart</h3>
      </PageHeader>
      <form action="/cart" className="Cart Cart--expanded" noValidate>
        <CartItemList />
        <CartFooter />
      </form>
    </Container>
  );
};

export default Cart;
