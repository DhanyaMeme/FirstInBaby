import { FC, ReactElement, useRef } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { IMainCategory } from "../../redux/slices/nav/nav.type";
import useHover from "../../hooks/useHover";

interface IProps {
  item: IMainCategory;
}

const NavItem: FC<IProps> = (props: IProps): ReactElement => {
  const { item } = props;
  const hoverRef = useRef(null);
  const isShown = useHover(hoverRef);

  return (
    <li
      className={classnames("HorizontalList__Item u-h7", {
        "is-expanded": isShown,
        "is-active": isShown,
      })}
      ref={hoverRef}
    >
      <NavLink to={`/collections/${item.name}`} className="Heading">
        {item.name}
        <span className="Header__LinkSpacer"> {item.name}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
