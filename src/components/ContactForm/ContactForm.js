import { useState } from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import RadioInput from "../../common/RadioInput/RadioInput";
import TextareaInput from "../../common/TextareaInput/TextareaInput";
import styles from "./ContactForm.module.scss";
import letterImage from "../../assets/images/letter.png";

const ContactForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    inquiry: "",
    message: "",
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    setState(initialState);
  };

  return (
    <form className={styles.contactForm}>
      <div className={styles.contactRow}>
        <Input
          labelText="First Name"
          inputValue={state.firstName}
          handleChange={handleChange}
          name="firstName"
        />
        <Input
          labelText="Last Name"
          inputValue={state.lastName}
          handleChange={handleChange}
          name="lastName"
        />
      </div>
      <div className={styles.contactRow}>
        <Input
          labelText="Email"
          inputValue={state.email}
          handleChange={handleChange}
          name="email"
          type="email"
        />
        <Input
          labelText="Phone Number"
          inputValue={state.phoneNumber}
          handleChange={handleChange}
          name="phoneNumber"
          mask="+1 999 9999 999"
        />
      </div>
      <p className={styles.formText}>Select Subject?</p>
      <div className={styles.radioButtons}>
        <RadioInput
          labelText="General Inquiry"
          inputValue="general1"
          checked={state.inquiry}
          handleChange={handleChange}
          name="inquiry"
        />
        <RadioInput
          labelText="General Inquiry"
          inputValue="general2"
          checked={state.inquiry}
          handleChange={handleChange}
          name="inquiry"
        />
        <RadioInput
          labelText="General Inquiry"
          inputValue="general3"
          checked={state.inquiry}
          handleChange={handleChange}
          name="inquiry"
        />
        <RadioInput
          labelText="General Inquiry"
          inputValue="general4"
          checked={state.inquiry}
          handleChange={handleChange}
          name="inquiry"
        />
      </div>
      <TextareaInput
        labelText="Message"
        inputValue={state.message}
        handleChange={handleChange}
        name="message"
        placeholder="Write your message.."
      />
      <div className={styles.buttonWrapper}>
        <Button text="Send Message" handleClick={handleSubmit} />
      </div>
      <img src={letterImage} className={styles.letter} alt="letter" />
    </form>
  );
};

export default ContactForm;
