import { FiUser } from "react-icons/fi";
import CircleIcon from "../../common/CircleIcon/CircleIcon";
import styles from "./UserButton.module.scss";

const UserButton = ({ color }) => {
  return (
    <button className={styles.button}>
      <CircleIcon color={color}>
        <FiUser size={16} color={color} />
      </CircleIcon>
    </button>
  );
};

export default UserButton;
