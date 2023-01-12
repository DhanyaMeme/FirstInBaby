import { ProductMeta } from "./ProductMeta";
import { ProductDeliveryForm } from "./ProductDeliveryForm";
import { ProductVariantsForm } from "./ProductVariantsForm";
import Sizechart from "../../../assets/images/sizechart.png";
import { Container } from "../../../ui_kits/global/Container.styles";
import { IProduct } from "../../../redux/slices/collection/collection.type";
import "./InfoViewer.scss";

interface IProps {
  product: IProduct;
}

export const InfoViewer = (props: IProps) => {
  const { product } = props;

  return (
    <div className="ProductInfo u-h5">
      <Container className="ProductInfo__Container">
        <ProductMeta product={product} />
        <ProductVariantsForm product={product}>
          <div className="ProductForm__LabelLink ">
            <img src={Sizechart} alt="SizeChart" />
            <span className="Link Link--primary">Size Guide</span>
          </div>
        </ProductVariantsForm>
        <ProductDeliveryForm />
      </Container>
    </div>
  );
};