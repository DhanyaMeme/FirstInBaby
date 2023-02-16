import { OrderCards } from "./OrderCards/OrderCards";
import { Alert } from "../../../../../ui_kits/Alert/Alert";
import { PageContent } from "../../../../../ui_kits/global/PageContent.styles";
import "./OrderInfo.scss";
import { IOrder } from "../../../../../redux/slices/profile/profile.type";
import { FC } from "react";
import { formatDate } from "../../../../../utils/script";

interface IProps {
  order: IOrder;
}

export const OrderInfo: FC<IProps> = (props: IProps) => {
  const { order } = props;

  const OrderSummaryData = {
    "Order ID": order.id,
    "Ordered On": formatDate(order.date),
    "Order Code": order.ordercode,
    "Order Status": order.orderStatus.status,
    "Total Items": order.items.length || 0,
    "Payment Status": order.paymentStatus,
  };

  const OrderSummary = () => {
    return (
      <div className="OrderSummary Grid u-h5">
        {Object.entries(OrderSummaryData).map(([key, value]) => (
          <div className="Grid__Cell 1/2--phone 1/3--tablet-and-up">
            <div className="OrderSummary__Unit">
              <div className="OrderSummary__subtitle Heading">{key}</div>
              <div className="Text--subdued">{value}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const DeliveryInfo = () => {
    return (
      <div className="Address__Summary Heading u-h5">
        <h3 className="Text--highlight">Delivery Address</h3>
        <div className="Address-nameNumber">
          <p>{order.name}</p>
          <div className="Address-verticalDivider"></div>
          <p className="mobile">T : {order.phone}</p>
        </div>
        <div className="Rte Text--subdued">
          <p>{`${order.flatNo} - ${order.street}, ${order.city}, ${order.pin}`}</p>
          <p>Landmark : {order.landMark}</p>
        </div>
      </div>
    );
  };

  const TrackAlert = () => {
    return (
      <Alert isLarge isSuccess classname="u-h5">
        <p>
          Your order has been sent. Track the shipment with number{" "}
          {order.orderId}
        </p>
        <p>
          or by clicking here: &nbsp;
          <a
            href="https://shiprocket.co/tracking/1091130292410"
            className="Link Link--underlineNative"
            target="/_blank"
          >
            TrackOrder
          </a>
        </p>
      </Alert>
    );
  };

  return (
    <PageContent spacingTight>
      <TrackAlert />
      <OrderSummary />
      <DeliveryInfo />
      <OrderCards orderItems={order.items} />
    </PageContent>
  );
};
