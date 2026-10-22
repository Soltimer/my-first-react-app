import VisitorCounter from './VisitorCounter'

function Footer() {
    return (
        <footer className="footer p-3 container-fluid">
            <hr/>
            <p><VisitorCounter/> — Made with React.</p>
            <hr/>
        </footer>
    );
}

export default Footer;