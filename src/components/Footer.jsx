import VisitorCounter from './VisitorCounter';

function Footer() {
    return (
        <footer className="footer p-3 container d-flex justify-content-center">
            <hr/>
            <p className="text-white"><VisitorCounter/> — Made with React</p>
            <hr/>
        </footer>
    );
}

export default Footer;