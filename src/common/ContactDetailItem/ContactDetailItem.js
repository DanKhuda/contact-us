import styles from "./ContactDetailItem.module.scss";

const ContactDetailItem = ({ icon: Icon, text, subText = "", style }) => {
  return (
    <div className={styles.detailItem} style={style}>
      <Icon className={styles.icon} />
      <span className={styles.detailText}>
        {text} <br /> {subText}{" "}
      </span>
    </div>
  );
};

export default ContactDetailItem;
