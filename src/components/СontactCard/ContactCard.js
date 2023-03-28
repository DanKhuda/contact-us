import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";
import styles from "./ContactCard.module.scss";

const ContactCard = () => {
  return (
    <div className={styles.contactCard}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactCard;
