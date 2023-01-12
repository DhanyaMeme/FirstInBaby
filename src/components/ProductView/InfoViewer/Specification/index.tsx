import { IProductSpecification } from "../../../../redux/slices/collection/collection.type";
import "./Style.scss";

interface IProps {
  productSpecification: IProductSpecification[] | null;
}

export const Specification = (props: IProps) => {
  const { productSpecification } = props;

  return (
    <div className="Spec-TableContainer">
      {productSpecification?.map((spec: IProductSpecification) => {
        const [key, value] = spec.specification.split(":");
        return (
          <div className="Spec-Row Heading u-h6" key={spec.spid}>
            <div className="Spec-RowKey">{key}</div>
            <div className="Spec-RowValue">{value}</div>
          </div>
        );
      })}
    </div>
  );
};
