import { useMemo } from "react";
import Minicart from "../../components/Minicart/Minicart";
import { SelectedAddress } from "../../components/Payment/SelectedAddress";
import { StripeCard } from "../../components/Payment/StripeCard";
import { useAuth } from "../../contexts/AuthContext";
import usePath from "../../hooks/usePath";
import { IAddress } from "../../redux/slices/address/address.type";
import { addCartItemsAsync } from "../../redux/slices/cart/cart.reducer";
import { selectCartItems } from "../../redux/slices/cart/cart.selector";
import { ICartItem } from "../../redux/slices/cart/cart.type";
import { placeOrderAsync } from "../../redux/slices/profile/profile.reducer";
import { customer } from "../../redux/slices/profile/profile.selector";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { IF } from "../../ui_kits/IF";
import { findArrayItems } from "../../utils/generics";
import { isEmpty } from "../../utils/script";

export const Payment = () => {
  const { user } = useAuth();
  const addressId = usePath();
  const dispatch = useAppDispatch();
  const cartList = useAppSelector(selectCartItems);
  const { data } = useAppSelector(customer);

  const selectedAddress = useMemo(() => {
    let computedData: IAddress | undefined = {} as IAddress;

    if (data?.addressTemp) {
      computedData = findArrayItems(data.addressTemp, {
        id: +addressId,
      });
    }

    return computedData;
  }, [data, addressId]);

  const addCartItems = async () => {
    cartList?.map((item: ICartItem) => {
      const filteredItems = {
        pId: item.mcId,
        custId: user,
        price: item.price,
        qty: item.quantity,
        size: item.size,
      };
      dispatch(addCartItemsAsync(filteredItems));
    });
  };

  const onPaymentSuccess = async (txnId: any) => {
    const OrderItems = {
      cusId: user as string,
      idx: parseInt(addressId),
      pstatus: "success",
      tnxid: txnId,
      type: "place",
    };
    await addCartItems();
    dispatch(placeOrderAsync(OrderItems));
  };

  const PaymentProps = {
    name: selectedAddress?.name,

    amount: 100,
    email: selectedAddress?.email,
    phoneNo: selectedAddress?.phone,
    onSuccess: onPaymentSuccess,
  };

  return (
    <div className="PageLayout">
      <div className="PageLayout--Primary">
        <IF condition={!isEmpty(SelectedAddress)}>
          <SelectedAddress address={selectedAddress as IAddress} />
          <StripeCard PaymentProps={PaymentProps as any} />
        </IF>
      </div>
      <div className="PageLayout--Secondary">
        <Minicart />
      </div>
    </div>
  );
};
