import React, { useState } from "react";
import yo from '../assets/yo.jpg'
import {MdCloudDownload} from 'react-icons/md'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import cv from '../assets/cv.pdf'



const About = () => {

  const handleDownload = () => {
    
    

    Toastify({
      text: "Descargado",
      className: "info",
      gravity: 'top',
      position : 'right',
      duration: 4000,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        borderRadius: '10px'
      }
    }).showToast();
  }

  return (
    <section id="about" className="about">
      <div className="about-section" >
        <h2>About</h2>
        <img src={yo} alt="Mi imagen" className="about-image" />
        <div className="about-description" >
          <p>
            Hola, mi nombre es Valentin Charlone, vivo y estudio en Tandil, tengo 23 años 
            y soy desarrollador web full stack. En este momento me encuentro orientado al desarrollo de 
            Front-end utilizando React principalmente, pero siempre abierto en busca de aprender
            nuevas habilidades y tecnologias. 
            
          </p>
          <p>
            Actualmente, soy estudiante avanzado de la tecnicatura universitaria en desarrollo de aplicaciones informáticas (TUDAI) 
            de la Universidad Nacional del Centro (UNICEN) en la Facultad de Ciencias Exactas.
            Ademas tengo certificaciones de cursos realizados en JavaScript y React 
          </p>
          <span>
            En proceso: Redux - Tailwind CSS
          </span>
          
          <h3>Descargar CV </h3> 
          
          <a href={cv} download="CV" onClick={handleDownload} ><MdCloudDownload /></a>
          
        </div>
      </div>
    </section>
  );
};

export default About;
