import React, { useState } from "react";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";


import { useForm } from "../hooks/useForm";
import MuiAlert from "./MuiAlert";

const Contact = () => {
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false)

  const initialState = {
    from_name: "",
    message: "",
    email_id: "",
  };

  const [inputs, handleChange, reset] = useForm(initialState);

  const { from_name, message, email_id } = inputs;

  const sendEmail = (e) => {
    e.preventDefault();
    if (!from_name.trim() || !message.trim() || !email_id.trim()) {
    
      let alert = setError(true)
      setTimeout(alert, 3000)
      return
    }
    emailjs
      .sendForm(
        "service_nkdr0ue",
        "template_p7spdmv",
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

    Swal.fire({
      title: 'Enviado!',
      text: 'Gracias por contactarte!',
      icon: 'success',
      confirmButtonText: 'Confirm'
    })
    setError(false)
    reset()
    
  };

  return (
    <section id="contact" className="contact">
      <h1>Contact</h1>
        
      <form onSubmit={sendEmail}>
        
        <label>Nombre y Apellido</label>
        <input 
          type="text" 
          name="from_name" 
          value={from_name} 
          onChange={handleChange} 
        />
        <br></br>
        <label>Email</label>
        <input 
          type="email" 
          name="email_id" 
          value={email_id}    
          onChange={handleChange} 
        />
        <br></br>
        <label>Mensaje</label>
        <textarea 
            rows="4" 
            cols="50" 
            name="message" 
            value={message}
            onChange={handleChange}>
        </textarea>
        <br></br>
        {
          error ? (<MuiAlert />)
          :
          ''
        }
        <br></br> 
        <input type="submit" value="Enviar" />
        
      </form>
    </section>
  );
};

export default Contact;
