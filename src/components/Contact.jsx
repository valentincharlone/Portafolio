import React, { useState } from 'react'

const Contact = () => {

  const [send, setSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSend(false);
    emailjs
      .sendForm(
        "service_4gyd4pd",
        "template_qyt4xuf",
        e.target,
        "oKKpYbhs94H3Q9t18"
      )

      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact' className='contact'>
      <h1>Contact</h1>
      <form onSubmit={sendEmail}>
        <label>Nombre y Apellido</label>
        <input type="text" name="name" /><br></br>
        <label>Email</label>
        <input type="email" name="email" /><br></br>
        <label>Mensaje</label>
        <textarea rows="4" cols="50"></textarea><br></br>
        <input type="submit" value="Enviar" />
      </form>
    </section>
  )
}

export default Contact