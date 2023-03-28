import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MobileMenuItem.module.scss";

const MobileMenuItem = ({ link, title, subMenu }) => {
  const hasSubMenu = subMenu?.length;
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = (e) => {
    e.preventDefault();
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li className={styles.mobileMenuItem}>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.mobileLink}`)}
      >
        {title}
      </NavLink>
      {hasSubMenu && (
        <span
          className={`${styles.arrow} ${isSubMenuOpen ? styles.arrowOpen : ""}`}
          onClick={toggleSubMenu}
        ></span>
      )}
      {subMenu && isSubMenuOpen && (
        <ul className={styles.subMenu}>
          {subMenu.map((subMenuItem, index) => (
            <MobileMenuItem key={index} {...subMenuItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MobileMenuItem;
