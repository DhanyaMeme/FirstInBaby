import { FC } from "react";
import { TextButton } from "../../../ui_kits/Buttons/TextButton/TextButton.component";
import { ImageWrapper } from "../../../ui_kits/ImageWrapper/ImageWrapper";
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
          classes="CollectionItem__Image  Image--contrast Image--zoomOut "
        />
      </div>
      <div className="CollectionItem__Content ">
        <h2 className="Heading">{collectionItem.title}</h2>
        <div className="Heading u-h4">{collectionItem.subHead}</div>
        <TextButton isSmall>View Products</TextButton>
      </div>
    </div>
  );
};
