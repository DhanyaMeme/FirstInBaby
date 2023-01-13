import CartFooter from "../../components/Cart/CartFooter/CartFooter";
import CartItemList from "../../components/Cart/CartItemList/CartItemList";
import { Container } from "../../ui_kits/global/Container.styles";
import { PageHeader } from "../../ui_kits/global/PageContent.styles";

const Cart = () => {
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
