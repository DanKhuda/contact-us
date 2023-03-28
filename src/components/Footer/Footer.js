import ContactDetails from "../../common/ContactDetails/ContactDetails";
import Logo from "../../common/Logo/Logo";
import styles from "./Footer.module.scss";
import { companyLinks, legalLinks, quickLinks } from "../../data/footerLinks";
import FooterLinks from "../../common/FooterLinks/FooterLinks";
import NewsletterForm from "../NewsletterForm/NewsletterForm";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Logo color="#ffffff" large />
          <hr className={styles.line} />
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.footerRow}>
            <p className={styles.footerText}>Reach us</p>
            <ContactDetails
              phone="+1012 3456 789"
              email="demo@gmail.com"
              location="132 Dartmouth Street Boston, Massachusetts 02156 United States"
              style={{ marginBottom: 24, alignItems: "flex-start" }}
            />
          </div>
          <div className={styles.footerRow}>
            <FooterLinks title="Company" links={companyLinks} />
          </div>
          <div className={styles.footerRow}>
            <FooterLinks title="Legal" links={legalLinks} />
          </div>
          <div className={styles.footerRow}>
            <FooterLinks title="Quick Links" links={quickLinks} />
          </div>
          <div className={styles.footerRow}>
            <NewsletterForm
              title="Join Our Newsletter"
              handleChange={handleChange}
              handleClick={handleClick}
              inputValue={email}
              note="* Will send you weekly updates for your better tool management."
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
