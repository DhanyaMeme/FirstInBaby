import { useEffect } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { fetchOrderAsync } from "../../../../redux/slices/profile/profile.reducer";
import { orders } from "../../../../redux/slices/profile/profile.selector";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { OrdersTable } from "./OrdersTable/OrdersTable";

export const MyOrders = () => {
  const { user } = useAuth();

  const { data: ordersData } = useAppSelector(orders);
  const dispatch = useAppDispatch();

  console.log(ordersData);

  useEffect(() => {
    if (!ordersData && user) dispatch(fetchOrderAsync(user));
  }, [dispatch, ordersData, user]);

  return (
    <div>
      <OrdersTable />
      {/* <OrderInfo /> */}
    </div>
  );
};
