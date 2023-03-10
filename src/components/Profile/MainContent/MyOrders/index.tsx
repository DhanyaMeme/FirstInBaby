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
import { Spinner } from "../../../../ui_kits/Spinner/Spinner.component";

export const MyOrders = () => {
  const { user } = useAuth();

  const { data: ordersData, loading } = useAppSelector(orders);
  const dispatch = useAppDispatch();

  const [orderId, setOrderId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const ITEMS_PER_PAGE = 10;

  const handleShowOrderHandler = (id: number) => {
    setOrderId(id);
  };

  const selectedOrder = useMemo(() => {
    let computedOrder = {} as IOrder;

    if (ordersData && orderId) {
      computedOrder = findArrayItems(ordersData, {
        orderid: orderId,
      }) as IOrder;
    }

    return computedOrder;
  }, [orderId, ordersData]);

  useEffect(() => {
    if (!ordersData && user)
      dispatch(fetchOrderAsync({ email: user, offset: 0, pagesize: 10 }));
  }, [dispatch, ordersData, user]);

  if (loading) {
    return <Spinner />;
  }

  if (!loading && !ordersData) {
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
