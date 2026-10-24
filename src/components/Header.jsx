import '../styles/header.css';
import main_icon from '../assets/main_icon_original_size.svg';

function Header() {
    return (
        <header className="header container d-flex justify-content-center">
            <nav>
                    <a href="/"><img src={main_icon} alt="Main icon" 
                    className="main_icon border border-5 border-black"/></a>
                    <a href="/"         className="btn btn-dark btn-lg rounded-0">Home</a>
                    <a href="/about"    className="btn btn-dark btn-lg rounded-0">Cards</a>
                    <a href="/services" className="btn btn-dark btn-lg rounded-0">Random Battle</a>
            </nav>
        </header>
    );
}

export default Header;