import '../styles/header.css';
import main_icon from '../assets/main_icon_original_size.svg';
import { Link } from "react-router";

function Header() {
    return (
        <header className="header container d-flex justify-content-center">
            <nav>
                <Link to="/"><img src={main_icon} alt="Main icon" 
                className="main_icon border border-5 border-black"/></Link>
                <Link to="/" className="btn btn-dark btn-lg rounded-0">Home</Link>
                <Link to="/Cards" className="btn btn-dark btn-lg rounded-0">Cards</Link>
                <Link to="/RandomBattle" className="btn btn-dark btn-lg rounded-0">Random Battle</Link>
                <Link to="/"><img src={main_icon} alt="Main icon" 
                className="main_icon border border-5 border-black"/></Link>
            </nav>
        </header>
    );
}

export default Header;