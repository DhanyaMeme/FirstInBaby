import React, { ReactNode } from "react";
import { Form } from "../../../ui_kits/Form";
import { OptionsWrapper } from "./OptionsWrapper";
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
import { useDispatch } from "react-redux";
import { setProductVariants } from "../../../redux/slices/product/product.slice";
import { IProductVariants } from "../../../redux/slices/product/product.type";
import { addItemToCart } from "../../../redux/slices/cart/cart.slice";
import { OnclickEvent } from "../../../models/types";
import { isEmpty } from "../../../utils/script";
import toastMessage from "../../../utils/toastMessage";
import { useAuth } from "../../../contexts/AuthContext";
import { addFavAsync } from "../../../redux/slices/wishlist/wishlist.reducer";
import { useProductCRUD } from "../../../hooks/useProductCRUD";

interface IProps {
  product: IProduct;
  children: ReactNode;
}

export const ProductVariantsForm: React.FC<IProps> = (props: IProps) => {
  const { product, children } = props;

  const { user } = useAuth();
  const { productSize } = product;

  const { handleToggleToFav } = useProductCRUD();

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

  const handleAddTocart = (e: OnclickEvent) => {
    e.preventDefault();
    dispatch(addItemToCart(selectedProductVariants));
    toastMessage(
      `${selectedProductVariants.productcolor} added to cart`,
      "success"
    );
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
      <TextButton isFull onClick={handleAddTocart}>
        ADD TO CART
      </TextButton>
    </Form>
  );
};
