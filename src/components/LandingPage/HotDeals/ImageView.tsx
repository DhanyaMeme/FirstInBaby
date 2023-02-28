import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ICollection } from "../../../redux/slices/home/home.type";
import { ImageWrapper } from "../../../ui_kits/ImageWrapper/ImageWrapper";
import { encodeUrl } from "../../../utils/textHandler";

interface IProps {
  item: ICollection;
}

export const ImageView: FC<IProps> = (props: IProps) => {
  const { item } = props;

  return (
    <div className="CollectionItem__Wrapper">
      <div className="CollectionItem__ImageWrapper">
        <ImageWrapper
          src={item.url}
          alt={item.name}
          classes="CollectionItem__Image Image--zoomOut"
        />
      </div>
      <NavLink
        to={`/collection/hotdeals/${encodeUrl(item.name)}`}
        className="CollectionItem__Content CollectionItem__Content--center Heading"
      >
        <h4 className="UnderLined__Text">{item.name}</h4>
      </NavLink>
    </div>
  );
};
