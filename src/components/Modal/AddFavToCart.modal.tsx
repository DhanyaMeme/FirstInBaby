import { useState } from "react";
import {
  IProduct,
  IProductSize,
} from "../../redux/slices/collection/collection.type";
import { closeModal } from "../../redux/slices/modal/modal.slice";
import { setProductVariants } from "../../redux/slices/product/product.slice";
import { useAppDispatch } from "../../redux/store";
import ModalWrapper from "../../ui_kits/modal/modal-wrapper.component";
import { RadioSwatch } from "../../ui_kits/RadioSwatch/RadioSwatch";
import { pick } from "../../utils/generics";
import toastMessage from "../../utils/toastMessage";

interface IProps {
  id: IProduct;
}

export const AddFavToCartModal = (props: IProps) => {
  const { id: product } = props;

  const dispatch = useAppDispatch();

  const [size, setSize] = useState<IProductSize>(
    product.productSize?.[0] || []
  );

  const handleSizeInput = (item: IProductSize) => {
    setSize(item);
  };

  const handleAddTocart = () => {
    const variants = pick(product, [
      "id",
      "mcId",
      "productname",
      "price",
      "imageurl",
      "productcolor",
    ]);
    dispatch(
      setProductVariants({
        ...variants,
        quantity: 1,
        size: size.psize,
      })
    );
    toastMessage(`${variants.productcolor} added to cart`, "success");
    dispatch(closeModal());
  };

  return (
    <ModalWrapper
      header="Add To Cart"
      actionName="Add"
      handleActionClick={handleAddTocart}
    >
      <RadioSwatch
        name="productSize"
        productSizeArray={(product.productSize as IProductSize[]) || []}
        onChange={handleSizeInput}
        valueKey="psize"
        initialSelectedItem={size}
      />
    </ModalWrapper>
  );
};
