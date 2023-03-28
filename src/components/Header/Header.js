import Logo from "../../common/Logo/Logo";
import CartButton from "../CartButton/CartButton";
import Menu from "../Menu/Menu";
import MobileMenu from "../MobileMenu/MobileMenu";
import UserButton from "../UserButton/UserButton";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo link={"/"} />
      <div className={styles.navbar}>
        <Menu />
        <div className={styles.buttonContainer}>
          <UserButton />
          <CartButton />
        </div>
      </div>
      <div className={styles.mobileNavbar}>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
