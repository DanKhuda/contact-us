import MenuItem from "../../common/MenuItem/MenuItem";
import { menuItems } from "../../data/menuItems";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav>
      <ul className={styles.desktopMenu}>
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
