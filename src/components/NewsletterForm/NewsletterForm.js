import Button from "../../common/Button/Button";
import styles from "./NewsletterForm.module.scss";

const NewsletterForm = ({ title, handleClick, handleChange, inputValue, note }) => {
  const buttonStyles = {
    fontSize: 12,
    padding: 0,
    width: 105,
    height: 39,
  };
  return (
    <div className={styles.subscriptionWrapper}>
      <p className={styles.title}>{title}</p>
      <input
        type="email"
        className={styles.input}
        value={inputValue}
        onChange={handleChange}
        placeholder="Your email address"
      />
      <Button text="Subscribe" handleClick={handleClick} style={buttonStyles} />
      <p className={styles.note}>{note}</p>
    </div>
  );
};

export default NewsletterForm;
