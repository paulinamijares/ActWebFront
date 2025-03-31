import './NavBar.css'

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="logo">Class Project Header</a>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Services</a>
            </nav>
        </header>
    )
}
export default Header