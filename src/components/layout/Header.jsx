import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <header className="header">
            <div className="logo">
                <span>
                    VC
                </span>
                <h2>Valentin Charlone</h2>
            </div>
            <nav>
                <IoMenu
                    className="toggle-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuOpen(!isMenuOpen);
                    }}
                ></IoMenu>

                <ul className={`menu ${isMenuOpen ? "visible" : "hidden"}`}>
                    <li>
                        <a href="#" onClick={scrollToTop}>Home</a>
                    </li>
                    <li>
                        <a href="#about" >About</a>
                    </li>
                    <li>
                        <a href="#technologies" >Skills</a>
                    </li>
                    <li> 
                        <a href="#proyects" >Projects</a>
                    </li>
                    <li>
                        <a href="#contact" >Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
