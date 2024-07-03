import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <div>
          <label>Nom :</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email :</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message :</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
