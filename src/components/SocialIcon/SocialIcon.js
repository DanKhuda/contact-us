import styles from "./SocialIcon.module.scss";

const SocialIcon = ({ link, icon: Icon }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.iconItem}>
      <div className={styles.circleIcon}>
        <Icon className={styles.socialIcon} />
      </div>
    </a>
  );
};

export default SocialIcon;
