import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { Form } from "../../../ui_kits/Form";
import { isEmpty } from "../../../utils/script";
import { OptionsWrapper } from "./OptionsWrapper";
import { OnclickEvent } from "../../../models/types";
import { useProductCRUD } from "../../../hooks/useProductCRUD";
import FavouriteIcon from "../../../assets/icons/Fav.icon";
import {
  IProduct,
  IProductSize,
} from "../../../redux/slices/collection/collection.type";
import { RadioSwatch } from "../../../ui_kits/RadioSwatch/RadioSwatch";
import { QuantitySelector } from "../../../ui_kits/QuantitySelector/QuantitySelector";
import { IconButton } from "../../../ui_kits/Buttons/IconButton/IconButton.component";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import { IF } from "../../../ui_kits/IF";
import { useAppSelector } from "../../../redux/store";
import { productVariants } from "../../../redux/slices/product/product.selector";
import { setProductVariants } from "../../../redux/slices/product/product.slice";
import { IProductVariants } from "../../../redux/slices/product/product.type";

interface IProps {
  product: IProduct;
  children: ReactNode;
}

export const ProductVariantsForm: React.FC<IProps> = (props: IProps) => {
  const { product, children } = props;
  const { productSize } = product;
  const { handleToggleToFav, handleAddTocart } = useProductCRUD();
  const dispatch = useDispatch();
  const selectedProductVariants =
    useAppSelector(productVariants) || ({} as IProductVariants);

  const handleSizeInput = (item: IProductSize) => {
    dispatch(
      setProductVariants({
        ...selectedProductVariants,
        size: item.psize,
      })
    );
  };

  const handleQuantityInput = (item: number) => {
    dispatch(
      setProductVariants({
        ...selectedProductVariants,
        quantity: item,
      })
    );
  };

  const addTocart = (e: OnclickEvent) => {
    e.preventDefault();
    handleAddTocart();
  };

  const FavIconOnclick = (e: OnclickEvent) => {
    e.preventDefault();
    handleToggleToFav(product.mcId);
  };

  return (
    <Form classname="ProductForm">
      <div className="ProductForm__Variants">
        {children}
        <IF condition={!isEmpty(productSize)}>
          <OptionsWrapper name="Size">
            <RadioSwatch
              name="productSize"
              productSizeArray={(productSize as IProductSize[]) || []}
              onChange={handleSizeInput}
              valueKey="psize"
              initialSelectedItem={(productSize?.[0] || []) as IProductSize}
            />
          </OptionsWrapper>
        </IF>
        <OptionsWrapper name="Quantity">
          <QuantitySelector
            isLarge
            handleIncrement={handleQuantityInput}
            handleDecrement={handleQuantityInput}
          />
        </OptionsWrapper>
      </div>
      <div className="ProductForm__AddFav isActive">
        <IconButton isSmall onClick={FavIconOnclick}>
          <FavouriteIcon />
        </IconButton>
        <span> Add to Favorite / Favourited</span>
      </div>
      <TextButton isFull onClick={addTocart}>
        ADD TO CART
      </TextButton>
    </Form>
  );
};
