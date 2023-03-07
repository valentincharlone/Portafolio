import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <span>
                    <a href="#home">VC</a>
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
                        <Link to="/landingPage">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/technologies">Skills</Link>
                    </li>
                    <li>
                        <Link to="/proyects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
