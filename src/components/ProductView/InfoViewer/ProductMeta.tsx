import React from "react";
import {
  IProduct,
  IProductData,
} from "../../../redux/slices/collection/collection.type";
import { Price } from "../../../ui_kits/global/Price.styles";
import { IF } from "../../../ui_kits/IF";
import { getOfferPrice } from "../../../utils/generics";
import { isEmpty, isFutureDate } from "../../../utils/script";
import { Flashsale } from "../../FlashSale";

import { Specification } from "./Specification";

interface IProps {
  product: IProductData;
}

export const ProductMeta: React.FC<IProps> = (props: IProps) => {
  const { productname, price, offer, descpription, specification, date } =
    props.product;

  const isValidDate = isFutureDate(date);

  return (
    <div className="ProductMeta Heading">
      <h2>{productname}</h2>
      <div className="ProductMeta__PriceList u-h4">
        <Price highlight>Rs. {price}</Price>
        <IF condition={!isEmpty(offer)}>
          <Price compareAt isLarge>
            Rs.{getOfferPrice(price, offer)}
          </Price>
        </IF>
      </div>
      {!isValidDate && date && <Flashsale endDate={date} />}
      <div className="Product__Description">{descpription}</div>
      <IF condition={!isEmpty(specification)}>
        <div className="Product__Description">
          <Specification productSpecification={specification} />
        </div>
      </IF>
    </div>
  );
};
