import styles from "./CircleIcon.module.scss";

const CircleIcon = ({ children, color = "#000000", backgroundColor = "none" }) => {
  return (
    <div
      className={styles.circleIcon}
      style={{ borderColor: color, backgroundColor: backgroundColor }}
    >
      {children}
    </div>
  );
};

export default CircleIcon;
