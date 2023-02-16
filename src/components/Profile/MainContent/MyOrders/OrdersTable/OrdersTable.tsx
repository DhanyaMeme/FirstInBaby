import { FC } from "react";
import { IOrder } from "../../../../../redux/slices/profile/profile.type";
import { Table, TableWrapper } from "../../../../../ui_kits/Table/Table.styles";
import { formatDate } from "../../../../../utils/script";

interface IProps {
  orders: IOrder[];
}

export const OrdersTable: FC<IProps> = (props: IProps) => {
  const { orders } = props;

  return (
    <TableWrapper>
      <Table className="Heading u-h5" hasNoBorder>
        <thead className="Text--subdued">
          <tr>
            <th>OrderId</th>
            <th>Date</th>
            <th>Total</th>
            <th>Payment</th>
            <th>ShopId</th>
          </tr>
        </thead>
        <tbody className="u-h5">
          {orders.map((order: IOrder) => (
            <tr key={order.id}>
              <td data-th="Order">
                <span className="Link Link--underline Text--highlight">
                  {order.orderId}
                </span>
              </td>
              <td data-th="Date">{formatDate(order.date)}</td>
              <td data-th="Total">{order.price}</td>
              <td data-th="Payment">{order.paymentStatus}</td>
              <td data-th="ShopId">{order.shopId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};
