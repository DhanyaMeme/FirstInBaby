import { useState } from "react";
import { IProduct } from "../../redux/slices/collection/collection.type";

interface IProps {
  product: IProduct;
}

export const ProductImage = (props: IProps) => {
  const { product } = props;

  const [loader, setLoader] = useState("Image--lazyLoading");

  const onImageLoaded = () => {
    setLoader("Image--lazyLoaded");
  };

  return (
    <div className="ProductItem__ImageWrapper">
      <div className="AspectRatio AspectRatio--tall">
        <img
          src={product.imageurl}
          alt={product.productname}
          onLoad={onImageLoaded}
          className={`ProductItem__Image Image--fadeIn ${loader}`}
        />
        <span className="Image__Loader"></span>
      </div>
    </div>
  );
};
