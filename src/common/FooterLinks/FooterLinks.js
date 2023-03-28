import styles from "./FooterLinks.module.scss";

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <ul className={styles.linksWrapper}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <a href={link.url} className={styles.link}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
