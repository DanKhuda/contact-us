import styles from "./Contact.module.scss";
import Title from "../../common/Title/Title";
import Header from "../../components/Header/Header";
import Subtitle from "../../common/Subtitle/Subtitle";
import ContactCard from "../../components/СontactCard/ContactCard";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.content}>
        <div className={styles.contactHeading}>
          <Title>Contact Us</Title>
          <Subtitle>Any question or remarks? Just write us a message!</Subtitle>
        </div>
        <ContactCard />
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
