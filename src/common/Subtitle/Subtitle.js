import styles from "./Subtitle.module.scss";

const Subtitle = ({ children, style }) => {
  return (
    <h2 style={style} className={styles.subtitle}>
      {children}
    </h2>
  );
};

export default Subtitle;
