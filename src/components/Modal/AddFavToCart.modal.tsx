import { useAppDispatch } from "../../redux/store";
import {
  IProduct,
  IProductSize,
} from "../../redux/slices/collection/collection.type";
import { useProductCRUD } from "../../hooks/useProductCRUD";
import { closeModal } from "../../redux/slices/modal/modal.slice";
import { RadioSwatch } from "../../ui_kits/RadioSwatch/RadioSwatch";
import ModalWrapper from "../../ui_kits/modal/modal-wrapper.component";

interface IProps {
  id: IProduct;
}

export const AddFavToCartModal = (props: IProps) => {
  
  const { id: product } = props;
  const dispatch = useAppDispatch();

  const { updateProductVariants, handleAddTocart } = useProductCRUD();

  const handleSizeInput = (item: IProductSize) => {
    updateProductVariants(product, item.psize);
  };

  const addTocart = () => {
    handleAddTocart();
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
        productSizeArray={(product.productSize as IProductSize[]) || []}
        onChange={handleSizeInput}
        valueKey="psize"
        initialSelectedItem={product.productSize?.[0] || []}
      />
    </ModalWrapper>
  );
};
