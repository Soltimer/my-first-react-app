function Header() {
    return (
        <header className="header">
            {/*<img src="logo.png" alt="Company Logo" className="logo" />*/}
            <nav>
                    <button type="button"><a href="/">Home</a></button>
                    <button type="button"><a href="/about">About</a></button>
                    <button type="button"><a href="/services">Services</a></button>
                    <button type="button"><a href="/contact">Contact</a></button>
            </nav>
        </header>
    );
}

export default Header;