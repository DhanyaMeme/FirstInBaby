import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { fetchOrderAsync } from "../../../../redux/slices/profile/profile.reducer";
import { orders } from "../../../../redux/slices/profile/profile.selector";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";

import { OrderInfo } from "./OrderInfo/OrderInfo";
import EmptyOrders from "../../../../assets/images/Empty_Order.png";
import { EmptyContainer } from "../../../EmptyContainer";
import { OrdersTable } from "./OrdersTable/OrdersTable";
import { IF } from "../../../../ui_kits/IF";
import { isEmpty } from "../../../../utils/script";
import { IOrder } from "../../../../redux/slices/profile/profile.type";
import { findArrayItems } from "../../../../utils/generics";

export const MyOrders = () => {
  const { user } = useAuth();

  const { data: ordersData } = useAppSelector(orders);
  const dispatch = useAppDispatch();

  const [orderId, setOrderId] = useState<number | null>(null);

  const handleShowOrderHandler = (id: number) => {
    setOrderId(id);
  };

  const selectedOrder = useMemo(() => {
    let computedOrder = {} as IOrder;

    if (ordersData && orderId) {
      computedOrder = findArrayItems(ordersData, {
        orderId: orderId,
      }) as IOrder;
    }
    return computedOrder;
  }, [orderId, ordersData]);

  useEffect(() => {
    if (!ordersData && user) dispatch(fetchOrderAsync(user));
  }, [dispatch, ordersData, user]);

  if (!ordersData) {
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
    <IF condition={!isEmpty(ordersData)}>
      <IF condition={isEmpty(orderId)}>
        <OrdersTable
          orders={ordersData as IOrder[]}
          handleOnclick={handleShowOrderHandler}
        />
      </IF>
      <IF condition={!isEmpty(orderId)}>
        <OrderInfo order={selectedOrder} />
      </IF>
    </IF>
  );
};
