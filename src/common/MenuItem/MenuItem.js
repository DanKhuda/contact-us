import { NavLink } from "react-router-dom";
import style from "./MenuItem.module.scss";

const MenuItem = ({ link, title, subMenu }) => {
  const hasSubMenu = subMenu?.length;

  return (
    <li className={style.menuItem}>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? `${style.active}` : `${style.link}`)}
      >
        {title}
        {hasSubMenu && <span className={style.arrow}></span>}
      </NavLink>
      {subMenu && (
        <ul className={style.subMenu}>
          {subMenu.map((subMenuItem, index) => (
            <MenuItem key={index} {...subMenuItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
