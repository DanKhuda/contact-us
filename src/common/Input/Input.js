import styles from "./Input.module.scss";
import InputMask from "react-input-mask";

const Input = ({ labelText, inputValue, handleChange, name, type = "text", mask = "" }) => {
  const activeClass = `${styles.labelText} ${
    inputValue?.length > 0 ? styles.fullField : styles.emptyField
  }`;
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>
        <p className={activeClass}>{labelText}</p>
        <InputMask
          className={styles.input}
          type={type}
          value={inputValue}
          onChange={handleChange}
          name={name}
          mask={mask}
          maskChar="_"
        />
      </label>
    </div>
  );
};

export default Input;
