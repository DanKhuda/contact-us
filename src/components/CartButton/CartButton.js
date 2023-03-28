import { FiShoppingCart } from "react-icons/fi";
import CircleIcon from "../../common/CircleIcon/CircleIcon";
import styles from "./CartButton.module.scss";

const CartButton = ({ color }) => {
  return (
    <button className={styles.button}>
      <CircleIcon color={color}>
        <FiShoppingCart size={16} color={color} />
      </CircleIcon>
    </button>
  );
};

export default CartButton;
