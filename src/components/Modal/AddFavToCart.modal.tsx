import {
  IProduct,
  IProductSize,
} from "../../redux/slices/collection/collection.type";
import ModalWrapper from "../../ui_kits/modal/modal-wrapper.component";
import { RadioSwatch } from "../../ui_kits/RadioSwatch/RadioSwatch";

interface IProps {
  id: IProduct;
}

export const AddFavToCartModal = (props: IProps) => {
  const {
    id: { productSize },
  } = props;

  return (
    <ModalWrapper
      header="Add To Cart"
      actionName="Add"
      handleActionClick={() => {}}
    >
      <RadioSwatch
        name="productSize"
        productSizeArray={(productSize as IProductSize[]) || []}
        onChange={() => {}}
        valueKey="psize"
        initialSelectedItem={(productSize?.[0] || []) as IProductSize}
      />
    </ModalWrapper>
  );
};
