import styles from "./Button.module.scss";

const Button = ({ text, handleClick, style }) => {
  return (
    <button className={styles.button} onClick={handleClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
