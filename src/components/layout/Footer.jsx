import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {FaRegCopyright} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-col">
                
                <a href="https://www.linkedin.com/in/valentin-charlone-6b79271ba/"><AiFillLinkedin /></a>
                <a href="https://github.com/valentincharlone"><BsGithub /></a>
            
            </div>
            <div className="footer-col">
              <div className='footer-name'>
                <FaRegCopyright className='icon'/>
                <p>Valentin Charlone</p>    
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer