import { useEffect } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { fetchOrderAsync } from "../../../../redux/slices/profile/profile.reducer";
import { orders } from "../../../../redux/slices/profile/profile.selector";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";

import { OrderInfo } from "./OrderInfo/OrderInfo";
import EmptyOrders from "../../../../assets/images/Empty_Order.png";
import { EmptyContainer } from "../../../EmptyContainer";

export const MyOrders = () => {
  const { user } = useAuth();

  const { data: ordersData } = useAppSelector(orders);
  const dispatch = useAppDispatch();

  console.log(ordersData);

  useEffect(() => {
    if (!ordersData && user) dispatch(fetchOrderAsync(user));
  }, [dispatch, ordersData, user]);

  if (ordersData?.length === 0) {
    return (
      <EmptyContainer
        url={EmptyOrders}
        head=" You haven't placed any order yet!"
        subhead=" Order section is empty. After placing order, You can track them from
        here!"
      />
    );
  }

  return (
    <div>
      <OrderInfo />
    </div>
  );
};
