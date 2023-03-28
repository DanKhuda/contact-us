import { Link } from "react-router-dom";
import { ReactComponent as LogoImage } from "../../assets/images/logo.svg";
import styles from "./Logo.module.scss";

const Logo = ({ link, large, color }) => {
  const logoStyle = {
    width: large ? "181px" : "121px",
    fill: color ? color : "#000",
  };

  return (
    <Link to={link}>
      <LogoImage className={styles.logo} style={logoStyle} />
    </Link>
  );
};

export default Logo;
