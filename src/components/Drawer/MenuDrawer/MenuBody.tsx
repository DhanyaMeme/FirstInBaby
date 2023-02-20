import { FC } from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../../../redux/slices/nav/nav.selector";
import { IMainCategory } from "../../../redux/slices/nav/nav.type";
import { useAppSelector } from "../../../redux/store";
import { encodeUrl } from "../../../utils/textHandler";

interface IProps {
  handleClick: () => void;
}

export const MenuBody: FC<IProps> = (props: IProps) => {
  const categoriesData = useAppSelector(categories);
  const { handleClick } = props;

  return (
    <nav className="SidebarMenu__Nav SidebarMenu__Nav--primary">
      {categoriesData.data?.map((item: IMainCategory) => {
        return (
          <div className="Collapsible" key={item.mainCatName}>
            <NavLink
              className="Collapsible__Button Heading Link Link--primary u-h6"
              onClick={handleClick}
              to={`/collections/${encodeUrl(item.mainCatName)}`}
            >
              {item.mainCatName}
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
};
