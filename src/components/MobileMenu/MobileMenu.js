import { useState } from "react";
import MobileMenuItem from "../../common/MobileMenuItem/MobileMenuItem";
import { menuItems } from "../../data/menuItems";
import Logo from "../../common/Logo/Logo";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import styles from "./MobileMenu.module.scss";
import UserButton from "../UserButton/UserButton";
import CartButton from "../CartButton/CartButton";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const menuClass = `${styles.mobileMenuWrapper} ${isOpen ? styles.open : styles.close}`;

  return (
    <div>
      <button className={styles.mobileMenuButton} onClick={handleBurgerMenuClick}>
        <BiMenuAltRight size={25} />
      </button>
      <div className={menuClass}>
        <ul className={styles.menu}>
          <li className={styles.mobileMenuOpen}>
            <Logo link={"/"} color="#ffffff" />
            <button className={styles.closeButton} onClick={handleBurgerMenuClick}>
              <BiX size={35} color="#ffffff" />
            </button>
          </li>
          {menuItems.map((menuItem, index) => (
            <MobileMenuItem key={index} {...menuItem} />
          ))}
          <li className={styles.mobileButtons}>
            <UserButton color="#ffffff" />
            <CartButton color="#ffffff" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
