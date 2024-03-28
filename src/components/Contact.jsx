import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Base from "./base/Base";

const Contact = () => {
  const formulaire = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3r6gvuj", "template_27th1zo", formulaire.current, {
        publicKey: "n5_c49Lav_F5V9SzA",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <Base>
    <section>
      <h2>Contact</h2>
      <div>
        <p>Blabla</p>
    
        <form ref={formulaire} onSubmit={sendEmail}>
          <label>Nom</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Envoyer !" />
        </form>
      </div>
    </section>
    </Base>
  );
};

export default Contact;
