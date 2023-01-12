import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ImageWrapper } from "../../../ui_kits/ImageWrapper/ImageWrapper";
import { encodeUrl } from "../../../utils/textHandler";
import { ICollectionData } from "./mockdata";

interface IProps {
  collectionItem: ICollectionData;
}

export const ImageView: FC<IProps> = (props: IProps) => {
  const { collectionItem } = props;

  return (
    <div className="CollectionItem__Wrapper">
      <div className="CollectionItem__ImageWrapper">
        <ImageWrapper
          src={collectionItem.imageUrl}
          alt={collectionItem.subHead}
          classes="CollectionItem__Image  Image--contrast Image--zoomOut"
        />
      </div>
      <NavLink
        to={`/collections/collection=${encodeUrl(collectionItem.title)}`}
        className="CollectionItem__Content Heading"
      >
        <h3>{collectionItem.title}</h3>
      </NavLink>
    </div>
  );
};
