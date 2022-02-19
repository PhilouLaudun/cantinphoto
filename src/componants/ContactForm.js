import React from "react";
import { useState } from "react";

const ContactForm = () => { // formulaire de contact
  const [name, setName] = useState(""); // variable contenant le nom de la personne envoyant le message
  const [company, setCompany] = useState(""); // variable contenant le nom de la société de la personne envoyant le message
  const [phone, setPhone] = useState(""); // variable contenant le numéro de téléphone de la personne envoyant le message
  const [email, setEmail] = useState(""); // variable contenant l'email de la personne envoyant le message
  const [message, setMessage] = useState(""); //variable contenant le message de la personne envoyant le message
  // quand on click sur le bouton envoyé
  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("name"); // récupére la localisation du champ obligatoire name
    let emailS = document.getElementById("email"); // récupére la localisation du champ obligatoire  email
    let messageS = document.getElementById("message"); // récupére la localisation du champ obligatoire message
    let formMess = document.querySelector(".form-message"); // récupére la localisation de l'élément servant à afficher les messages d'erreur

    const isEmail = () => {
      let isMail = document.getElementById("not-mail"); // récupére la localisation indiquant un email non valide
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // régle concernant la vlaidation d'un email

      if (email.match(regex)) {
        // si email conforme
        isMail.style.display = "none"; // cache le message
        return true; // renvoi true pour email valide
      } else {
        isMail.style.display = "block"; // affiche le message d'email non valide
        isMail.style.animation = "dongle 1s"; // anime le message
        // attend une minute avant d'effacer le messager
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false; //renvoi faux pour email valide
      }
    };

    if (name && isEmail() && message) {
      // si tous les champs obligatoires sont remplis
      const templateId = "template_19udd2q"; // variable contenant le numéro d'identification pour emailjs

      nameS.classList.remove("red"); // supprime la couleur rouge pour le nom si le champs n'a pas été rempli avant
      emailS.classList.remove("red"); // supprime la couleur rouge pour le nom si le champs n'a pas été rempli avant
      messageS.classList.remove("red"); // supprime la couleur rouge pour le nom si le champs n'a pas été rempli avant

      sendFeedback(templateId, {
        //envoi le message: numero d'identification et les variables
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *"; // charge le message d'erreur
      formMess.style.background = "{$red}"; // met le fond du message en rouge
      formMess.style.opacity = "1"; // affiche le message
      //attend 2s avant d'effacer le message
      setTimeout(() => {
        formMess.style.opacity = "0";
      }, 2000);

      if (!name) {
        // si nom non rempli
        nameS.classList.add("error"); // ajoute le syle error au message affiché par défaut pour le nom
      }
      if (!email) {
        emailS.classList.add("error"); // ajoute le syle error au message affiché par défaut pour l'email
      }
      if (!message) {
        messageS.classList.add("error"); // ajoute le syle error au message affiché par défaut pour le message
      }
    }
  };

  const sendFeedback = (templateId, variables) => {
    let formMess = document.querySelector(".form-message"); // récupére la localisation de l'élément servant à afficher les messages d'erreur

    window.emailjs // utilise le service eamiljs
      .send("service_3b23au8", templateId, variables) // envoi le message
      .then((res) => {
        // si envoi OK
        formMess.innerHTML =
          "Message envoyé ! Je vous contacterez dès que possible."; // charge le message
        formMess.style.background = "{$blue}"; // met le fond du message en bleu
        formMess.style.opacity = "1"; // affiche le message

        document.getElementById("name").classList.remove("error"); // enleve le syle error au message affiché par défaut pour le nom
        document.getElementById("email").classList.remove("error"); // enleve le syle error au message affiché par défaut pour l'email
        document.getElementById("message").classList.remove("error"); // enleve le syle error au message affiché par défaut pour le message
        setName(""); // efface le champ
        setCompany(""); // efface le champ
        setPhone(""); // efface le champ
        setEmail(""); // efface le champ
        setMessage(""); // efface le champ
        // attend 5s avant d'effacer le messsage
        setTimeout(() => {
          formMess.style.opacity = "0";
        }, 5000);
      })
      .catch((err) => {
        // si erreur d'envoi
        formMess.innerHTML = "Une erreur s'est produite, veuillez réessayer."; // charge le message
        formMess.style.background = "$red"; // met le fond du message en rouge
        formMess.style.opacity = "1"; // affiche le message
        // attend 2s avant d'effacer le messsage
        setTimeout(() => {
          formMess.style.opacity = "0";
        }, 2000);
      });
  };

  return (
    <form className="contact-form">
      {/* zone principale du formulaire*/}
      <h2>contactez-moi</h2>
      {/* zone principale des champs*/}
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="société"
          value={company}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
      </div>
      <input
        className="button hover"
        type="submit"
        value="envoyer"
        onClick={handleSubmit}
      />
      {/* message caché et affiché au besoin pour les champs obligatoire non saisis et les envois*/}
      <div className="form-message"></div>
    </form>
  );
};

export default ContactForm;
