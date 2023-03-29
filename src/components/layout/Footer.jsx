import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'

import {GoChevronUp} from 'react-icons/go'
import { animateScroll as scroll } from "react-scroll";


const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
};
  return (
    <footer>
        <div className="back-to-top">
          <a href="#" smooth duration={1000}>
            <GoChevronUp onClick={scrollToTop}/>
          </a>
        </div>
        <div className="footer-container">
            <div className="footer-col">
                
                <a href="https://www.linkedin.com/in/valentin-charlone-6b79271ba/"><AiFillLinkedin /></a>
                <a href="https://github.com/valentincharlone"><BsGithub /></a>
            
            </div>
            
        </div>
    </footer>
  )
}

export default Footer