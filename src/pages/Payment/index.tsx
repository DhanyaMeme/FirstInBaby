import { useMemo } from "react";
import Minicart from "../../components/Minicart/Minicart";
import { SelectedAddress } from "../../components/Payment/SelectedAddress";
import { StripeCard } from "../../components/Payment/StripeCard";
import { useAuth } from "../../contexts/AuthContext";
import usePath from "../../hooks/usePath";
import { addressList } from "../../redux/slices/address/address.selector";
import { IAddress } from "../../redux/slices/address/address.type";
import { addCartItemsAsync } from "../../redux/slices/cart/cart.reducer";
import { selectCartItems } from "../../redux/slices/cart/cart.selector";
import { ICartItem } from "../../redux/slices/cart/cart.type";
import { placeOrderAsync } from "../../redux/slices/profile/profile.reducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { IF } from "../../ui_kits/IF";
import { findArrayItems } from "../../utils/generics";
import { isEmpty } from "../../utils/script";

export const Payment = () => {
  const { user } = useAuth();
  const addressId = usePath();
  const dispatch = useAppDispatch();
  const { data: addresses } = useAppSelector(addressList);
  const cartList = useAppSelector(selectCartItems);

  const selectedAddress = useMemo(() => {
    let computedData: IAddress | undefined = {} as IAddress;

    if (addresses) {
      computedData = findArrayItems(addresses.address, {
        id: +addressId,
      });
    }

    return computedData;
  }, [addresses, addressId]);

  const addCartItems = async () => {
    const items = cartList?.map((item: ICartItem) => {
      return {
        pId: item.mcId,
        custId: user,
        price: item.price,
        qty: item.quantity,
        size: item.size,
      };
    });
    dispatch(addCartItemsAsync(items));
  };

  const onPaymentSuccess = async (txnId: any) => {
    const OrderItems = {
      cusId: user as string,
      addId: parseInt(addressId),
      pstatus: "success",
      tnxid: txnId,
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
