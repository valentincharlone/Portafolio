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
            y soy desarrollador web full stack
            con muchas ganas de introducirme al mundo laboral. Me apasiona
            crear soluciones innovadoras y estoy siempre buscando aprender
            nuevas habilidades y tecnolgias.
          </p>
          <p>
            Me considero una persona proactiva, soy capaz de
            adaptarme a un grupo de trabajo rapidamente y poder aportar
            buenas energías.
          </p>
          <p>
            En este momento me encuentro estudiando una carrera a fines informaticos y/o tecnologicos - TUDAI,
            en la Facultad de Ciencias Exactas Tandil.
            Ademas tengo certificaciones de cursos realizados en JavaScript y React
          </p>
          
          <h3>Download cv </h3> 
          
          <a href={cv} download="CV" onClick={handleDownload} ><MdCloudDownload /></a>
          
        </div>
      </div>
    </section>
  );
};

export default About;
