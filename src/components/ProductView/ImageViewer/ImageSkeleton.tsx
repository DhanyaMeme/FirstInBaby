import React, { FC } from "react";
import { IProductImage } from "../../../redux/slices/collection/collection.type";

interface IProps {
  slide: IProductImage;
}

export const ImageSkeleton: FC<IProps> = (props: IProps) => {
  const { slide } = props;

  return (
    <div className="ProductImage__Grid--Container">
      <div
        className="ProductImage__Grid--Image"
        style={{ backgroundImage: `url(${slide.imageUrl})` }}
      ></div>
      <div className="ProductImage__Grid--SkeletonLoader"></div>
    </div>
  );
};
