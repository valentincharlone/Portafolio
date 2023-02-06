import { useState } from 'react';
import { IoMenu } from 'react-icons/io5'


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
   
    return (
        <header className="header">
            <div className="logo">
                    <span>VC</span>
                    <h2>Valentin Charlone</h2>
            </div>
            <nav>
                
                <IoMenu 
                    className="toggle-button" 
                    onClick={(e) => {
                            e.stopPropagation()
                            setIsMenuOpen(!isMenuOpen)}
                        }>
                </IoMenu>
                
                <ul className={`menu ${isMenuOpen ? "visible" : "hidden"}`}>
                    <li>
                        <a href="#home" to='/home'>Home</a>
                    </li>
                    <li>
                        <a href="#about" to='/about'>About</a>
                    </li>
                    <li>
                        <a href="#technologies" to='/technologies'>Skills</a>
                    </li>

                    <li>
                        <a href="#projects" to='/projects'>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" to='/contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
