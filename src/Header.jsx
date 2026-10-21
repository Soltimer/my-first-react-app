function Header() {
    return (
        <header className="header container-fluid">
            {/*<img src="logo.png" alt="Company Logo" className="logo" />*/}
            <nav>
                    <a href="/"         className="btn btn-primary btn-lg">Home</a>
                    <a href="/about"    className="btn btn-primary btn-lg">About</a>
                    <a href="/services" className="btn btn-primary btn-lg">Services</a>
                    <a href="/contact"  className="btn btn-primary btn-lg">Contact</a>
            </nav>
        </header>
    );
}

export default Header;