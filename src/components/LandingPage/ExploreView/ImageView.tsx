import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { ImageWrapper } from "../../../ui_kits/ImageWrapper/ImageWrapper";
import { encodeUrl } from "../../../utils/textHandler";
import { IExploreData } from "./mockData";

interface IProps {
  collectionItem: IExploreData;
}

export const ImageView: FC<IProps> = (props: IProps) => {
  const { collectionItem } = props;

  return (
    <div className="CollectionItem__Wrapper">
      <div className="CollectionItem__ImageWrapper">
        <ImageWrapper
          src={collectionItem.imageUrl}
          alt={collectionItem.title}
          classes="CollectionItem__Image  Image--contrast Image--zoomOut "
        />
      </div>
      <NavLink
        to={`/collections/WOMEN?collection=${encodeUrl(collectionItem.title)}`}
        className="CollectionItem__Content Heading"
      >
        <h4 className="UnderLined__Text">{collectionItem.title}</h4>
      </NavLink>
    </div>
  );
};
