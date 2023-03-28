import Subtitle from "../../common/Subtitle/Subtitle";
import styles from "./ContactInfo.module.scss";
import ContactDetails from "../../common/ContactDetails/ContactDetails";
import SocialIcon from "../SocialIcon/SocialIcon";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import { ReactComponent as SmallCircle } from "../../assets/images/ellipse-small.svg";
import { ReactComponent as LargeCircle } from "../../assets/images/ellipse-large.svg";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Contact Information</h2>
        <Subtitle style={{ color: "#C9C9C9" }}>Say something to start a live chat!</Subtitle>
      </div>
      <ContactDetails
        phone="+1012 3456 789"
        email="demo@gmail.com"
        location="132 Dartmouth Street Boston, Massachusetts 02156 United States"
      />
      <div className={styles.socialIcons}>
        <SocialIcon link="https://twitter.com" icon={FaTwitter} />
        <SocialIcon link="https://www.instagram.com" icon={FaInstagram} />
        <SocialIcon link="https://discord.com/" icon={FaDiscord} />
      </div>
      <SmallCircle className={styles.circleSmall} />
      <LargeCircle className={styles.circleLarge} />
    </div>
  );
};

export default ContactInfo;
