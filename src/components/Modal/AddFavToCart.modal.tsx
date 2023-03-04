import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  IProduct,
  IProductData,
  IProductSize,
} from "../../redux/slices/collection/collection.type";
import { useProductCRUD } from "../../hooks/useProductCRUD";
import { closeModal } from "../../redux/slices/modal/modal.slice";
import { RadioSwatch } from "../../ui_kits/RadioSwatch/RadioSwatch";
import ModalWrapper from "../../ui_kits/modal/modal-wrapper.component";
import { productVariants } from "../../redux/slices/product/product.selector";
import { IProductVariants } from "../../redux/slices/product/product.type";

interface IProps {
  id: IProductData;
}

export const AddFavToCartModal = (props: IProps) => {
  const { id: product } = props;
  const dispatch = useAppDispatch();

  const { updateProductVariants, handleAddTocart } = useProductCRUD();

  const selectedProductVariants =
    useAppSelector(productVariants) || ({} as IProductVariants);

  const handleSizeInput = (psize: string) => {
    updateProductVariants(product, psize);
  };

  const addTocart = () => {
    handleAddTocart(product);
    dispatch(closeModal());
  };

  return (
    <ModalWrapper
      header="Add To Cart"
      actionName="Add"
      handleActionClick={addTocart}
    >
      <RadioSwatch
        name="productSize"
        productSizeArray={(product.sizedto as IProductSize[]) || []}
        onChange={handleSizeInput}
        valueKey="psize"
        initialSelectedItem={selectedProductVariants.size}
      />
    </ModalWrapper>
  );
};
