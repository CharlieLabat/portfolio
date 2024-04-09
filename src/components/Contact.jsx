import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Base from "./base/Base";
import "../style/Contact.scss"

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
      <section className="contact-page">
        <h1 className="contact-page__titre">Contact</h1>
        <div className="contact-page__zone">
          <div className="contact-page__sous-zone">
          <p className="contact-page__texte">
          Vous voulez me contacter ? Je vous laisse mes emails et numéros de téléphone.
          Vous pouvez aussi me contacter par ce formulaire.

          </p>
          <ul className="contact-page__infos">
            <li className="contact-page__info">
              Université de la Rochelle : charlie.labat@univ-lr.fr
            </li>
            <li className="contact-page__info">
              Email Personnelle : charlielabat17@gmail.com
            </li>
            <li className="contact-page__info">
             Numéro Personnelle : (+33) 06 79 06 00 40
            </li>
          </ul>
          </div>
          <form
            ref={formulaire}
            onSubmit={sendEmail}
            className="contact-page__formulaire"
          >
            <label className="contact-page__label">Nom</label>
            <input type="text" name="user_name" className="contact-page__element" />
            <label className="contact-page__label">Email</label>
            <input type="email" name="user_email" className="contact-page__element" />
            <label className="contact-page__label">Message</label>
            <textarea name="message" className="contact-page__element contact-page__element--texte" />
            <input type="submit" value="Envoyer !" className="contact-page__button" />
          </form>
        </div>
      </section>
    </Base>
  );
};

export default Contact;
