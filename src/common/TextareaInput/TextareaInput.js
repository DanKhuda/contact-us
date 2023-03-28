import styles from "./TextareaInput.module.scss";

const TextareaInput = ({ labelText, inputValue, handleChange, name, placeholder }) => {
  const activeClass = `${styles.labelText} ${
    inputValue?.length > 0 ? styles.fullField : styles.emptyField
  }`;

  return (
    <div className={styles.textareaWrapper}>
      <label>
        <p className={activeClass}>{labelText}</p>
        <textarea
          className={styles.textarea}
          value={inputValue}
          onChange={handleChange}
          name={name}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default TextareaInput;
