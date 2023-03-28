import styles from "./RadioInput.module.scss";

const RadioInput = ({ labelText, inputValue, handleChange, name, checked }) => {
  return (
    <label className={styles.radioWrapper}>
      <input
        className={styles.radioButton}
        type="radio"
        value={inputValue}
        checked={checked === inputValue}
        onChange={handleChange}
        name={name}
      />
      <span className={styles.labelText}>{labelText}</span>
    </label>
  );
};

export default RadioInput;
