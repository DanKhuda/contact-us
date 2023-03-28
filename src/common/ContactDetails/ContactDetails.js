import styles from "./ContactDetails.module.scss";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactDetailItem from "../ContactDetailItem/ContactDetailItem";

const ContactDetails = ({ phone, email, location, style }) => {
  const [address, cityState] = location.split(",");
  return (
    <div className={styles.contactDetails}>
      <ContactDetailItem icon={FaPhone} text={phone} style={style} />
      <ContactDetailItem icon={FaEnvelope} text={email} style={style} />
      <ContactDetailItem icon={FaMapMarkerAlt} text={address} subText={cityState} style={style} />
    </div>
  );
};

export default ContactDetails;
